%% Task Data Pre-Processing for Personality-Behaviour Study

% June 23, 2022

% Usage
% Before running for each batch:
% - Run Questionnaire Scoring
% - Within Unprocessed Data, create folder with date of data collection
% - Put Unprocessed data CSV file for each participant in the
% date-specific unprocessed data folder
% - Open Unprocessed data (with Excel)
% - Add Column called "RecallSuccess" after "RecallAttemptTyped" column
% (will be Column AA)
% - In "RecallSuccess" column, put "1" if answer is correct (see Column C
% "Name" for answer) or "2" if incorrect, leave blank if nothing was typed
% - Correct is when: either first OR last name is right, spelling doesn't
% matter
% - So if name is Joe Smith: Joe, Smith, Joe Williams or John Smith are 
% all correct, but John Williams is incorrect
% - Also be lenient on spelling: Joe William is correct, but not if name
% is different, i.e. Sarah = Sara but Tyler and Taylor are not the same
% - Once "scoring" is complete, save CSV file
% - Change line 29 to have study folder path and 32 to have date
% of data collection, to match folder
% - Run this script once per batch of data

%% Import Data

genFolder = fullfile('');
% Insert path to study folder

date = ''; % enter date to specify subfolder of data
% ensure it matches the named folder where data files are located

pFolder = fullfile(genFolder, 'Unprocessed Data', date); 

list = ls([pFolder filesep '*.csv']); % get list of csv files
 
list = list(3:end,:); % first 2 rows are blanks, remove
subjIDs = cell(height(list),1); % create to-be-filled list of subjIDs

for m = 1:length(subjIDs) % for each file 

    subjID = list(m,1:4); % get 1st 4 letters of file to use as ID
    subjIDs (m,1) = cellstr(subjID); % cut out and save participant's ID

    subjfile = strtrim(list(m,:)); % remove missing chars from file name

    data = readtable (fullfile (pFolder, subjfile));
    % This section will locate participant's data and read it in

    %% Extract each phase data
    % Will pull out meaningful data for each phase of experiment and will
    % ignore the "filler"

    encodingphase = data (:, {'Face', 'Name', 'ItemID', 'StudyTrial'});

    stimuliinfo = data (:,  {'Face', 'Name', 'ItemID'});

    FOKphase = data (:, {'RecallAttemptTyped', 'RecallSuccess', ...
        'RecallRT', 'FOKRT', 'CombinedRT', 'FOKTestTrial', ...
        'FOK_resp_keys'});
    FOKphase = [stimuliinfo, FOKphase];

    curiosityphase = data(:,{'RestudyTrial', 'key_restudychoice_keys', ...
        'key_restudychoice_rt', 'RestudyChoice', ...
        'satisfaction_rating_keys', 'satisfaction_rating_rt'});
    curiosityphase = [stimuliinfo, curiosityphase];

    %% Clean encoding phase data

    encodingphase = rmmissing(encodingphase, ...
        'DataVariables',{'StudyTrial'});
    % remove rows for any non-encoding trial and break

    encodingphase = sortrows(encodingphase,3);
    % sort according to face-name pair number

    %% Clean FOK phase data

    for i = 1:height(FOKphase)
        if ~isnan(FOKphase {i, 9})
            break
        end
    end

    FOKphase = FOKphase(i:end, :);
    % find start of Phase 2 and remove all rows from before

    for i = 1:height(FOKphase)
        if isnan(FOKphase {i, 9}) % if NaN no trial data in some of row
            if ~isnan(FOKphase {i+1, 9}) 
                % if this is not NaN its due to break
                FOKphase{i-1,6} = FOKphase {i,6}; 
                % in which case move data for trial to 1 row
                FOKphase{i-1,7} = FOKphase {i,7};
                FOKphase{i-1,8} = FOKphase {i,8};
                FOKphase{i-1,10} = FOKphase {i,10};
            elseif isnan(FOKphase {i+1, 9}) % if following row is NaN
                % its cause phase finished
                break
            end
        end
    end

    FOKphase = FOKphase(1:i-1, :); 
    % remove all rows for after phase finished

    FOKphase = rmmissing(FOKphase,'DataVariables',{'FOKTestTrial'});
    % delete rest break row

    FOKphase = sortrows(FOKphase,3); %sort according to face-name #

    FOKphase = FOKphase (:,4:end); % remove stimuli info as this
    % will be repetitive once all data combined

    %% Clean curiosity phase data

    for i = 1:height(curiosityphase)
        if ~isnan(curiosityphase {i, 4})
            break
        end
    end

    curiosityphase = curiosityphase(i:end, :); % find where phase begins,
    % remove earlier rows

    for i = 1:height(curiosityphase)
        if isnan(curiosityphase {i, 4}) % same as before, look for halfway
            % break and fix
            if ~isnan(curiosityphase {i, 6})
                curiosityphase{i-1,5} = curiosityphase {i,5};
                curiosityphase{i-1,6} = curiosityphase {i,6};
                curiosityphase{i-1,7} = curiosityphase {i,7};
                curiosityphase{i-1,8} = curiosityphase {i,8};
                curiosityphase{i-1,9} = curiosityphase {i,9};
            end
        end
    end

    curiosityphase = rmmissing(curiosityphase,...
        'DataVariables',{'RestudyTrial'});
    % remove break row and all rows after phase finished

    curiosityphase = sortrows(curiosityphase,3); % sort according to
    % face-name ID

    curiosityphase = curiosityphase (:,4:end); % remove stimuli info

    %% Combine cleaned data,

    finaldata = [encodingphase, FOKphase, curiosityphase];

    % each row will be sorted properly, but the stimuli 
    % info is only present once

    %% Clean recall success column

    for i = 1:height(finaldata)
        if isnan(finaldata{i, 6}) % if the row is NaN, nothing was typed
            finaldata{i,6} = 0; % if so we score it as "0"
        end
    end

    %% Save and export
  
    exportfolder = fullfile(genFolder, 'Processed Data');
    if not(isfolder(exportfolder))
        mkdir(exportfolder) % make processed folder directory if need be
    end
    mkdir ([exportfolder '\' subjID]); % make participant subfolder

    savedir = [exportfolder, '\', subjID, '\', subjID, '.csv'];

    writetable(finaldata, savedir);
    % will export data into subject-specfic folder and saves it

    %% Qualitry Control and Attention Checks
    % Since our data is being collected online we want to ensure the 
    % quality isnt being lost compared to what it would be in-person. 
    % Since we cant watch the participant to ensure they are paying full
    % attention we rely on measures incorporated into the task

    % 1. Check "Break time between phases"

    phase1to2break = mean(data{:,24}, 'omitnan');
    phase2to3break = mean(data{:,60}, 'omitnan');

    % 2. Check break time within each phase

    breakphase1RT = table2array(data(:,18));
    breakphase23RT = table2array(data(:,54));
    breakphase23RT = rmmissing(breakphase23RT);

    phase1break = mean(breakphase1RT(:,1), 'omitnan'); % Phase 1
    phase2break = breakphase23RT(1,1); % Phase 2
    phase3break = breakphase23RT(2,1); % Phase 3

    % 3. Check Average "Catch" RT

    catchRT = table2array(data(:,47));

    for i = 1:length(catchRT)
        if ~isempty(catchRT{i,1})
            catchRT{i,1} = str2num(catchRT{i,1});
        else
            catchRT{i,1} = NaN;
        end
    end

    catchRT = cell2mat(catchRT);
    catchRT = rmmissing(catchRT);

    catchRTavg = mean(catchRT);

    catch1 = catchRT(1,1);
    catch2 = catchRT(2,1);
    catch3 = catchRT(3,1);
    catch4 = catchRT(4,1);

    % 4. Get Experiment Length

    explength = table2array(data(end,end));

    % 5. Get Average recall attempt RT

    recallRT = table2array(data(:,28));
    recallRTavg = mean(recallRT, 'omitnan');

    % 6. Check Average restudy choice RT

    restudyRT = table2array(data(:,63));
    restudyRTavg = mean(restudyRT, 'omitnan');

    % 7. Check Average satisfaction choice RT

    satisfactionRT = table2array(data(:,66));
    satisfactionRTavg = mean(satisfactionRT, 'omitnan');

    %% Save QC information

    qualitycontrol = zeros(1,14);
    qualitycontrol(1,1) = phase1to2break;
    qualitycontrol(1,2) = phase2to3break;
    qualitycontrol(1,3) = phase1break;
    qualitycontrol(1,4) = phase2break;
    qualitycontrol(1,5) = phase3break;
    qualitycontrol(1,6) = catchRTavg;
    qualitycontrol(1,7) = catch1;
    qualitycontrol(1,8) = catch2;
    qualitycontrol(1,9) = catch3;
    qualitycontrol(1,10) = catch4;
    qualitycontrol(1,11) = explength;
    qualitycontrol(1,12) = recallRTavg;
    qualitycontrol(1,13) = restudyRTavg;
    qualitycontrol(1,14) = satisfactionRTavg;

    % Save in individual participant folder

    savedir3 = [exportfolder, '\', subjID, '\',...
        subjID, 'QualityControl', '.csv'];
    QCTable = array2table(qualitycontrol, 'VariableNames',...
        {'Phase1to2Break', 'Phase2to3Break', 'Phase1Rest', ...
        'Phase2Rest','Phase3Rest', 'CatchTrialAverageRT', ...
        'CatchTrial1RT', 'CatchTrial2RT','CatchTrail3RT', ...
        'CatchTrial4RT', 'ExperimentLength', 'RecallAttemptAverageRT', ...
        'RestudyChoiceAverageRT', 'SatisfactionRatingAverageRT'}); 
    % convert to a table

    writetable(QCTable, savedir3); % save in subject specific folder as
    % a CSV file

    % Save as a growing matrix file

    compiledfolder = fullfile(genFolder, 'Compiled Results');
    if not(isfolder(compiledfolder))
        mkdir(compiledfolder) % create compiled results folder
    end

    compiledfile = [genFolder, '\Compiled Results\qualitycontrol', ...
        date , '.txt'];

    if isfile(compiledfile)
        compiledQCdata = load(compiledfile);
        compiledQCdata = [compiledQCdata; qualitycontrol];
        % File exists, import compiled data list
        % combine current data with compiled list, replace compiled
    else
        compiledQCdata = qualitycontrol;
        % File does not exist. Make compiled list just this persons data
    end

    writematrix (compiledQCdata, compiledfile); % save new compiled in full

    compiledQCdatatable = array2table (compiledQCdata, 'VariableNames',...
        {'Phase1to2Break', 'Phase2to3Break', 'Phase1Rest', ...
        'Phase2Rest','Phase3Rest', 'CatchTrialAverageRT', ...
        'CatchTrial1RT', 'CatchTrial2RT','CatchTrail3RT', ...
        'CatchTrial4RT', 'ExperimentLength','RecallAttemptAverageRT', ...
        'RestudyChoiceAverageRT','SatisfactionRatingAverageRT'});
    % convert to a table

    QCtablename = [genFolder,...
        '\Compiled Results\QualityControlTable', date '.xlsx'];
    writetable (compiledQCdatatable, QCtablename); % save table

    %% FOK Rating Distribution Check
    % In order to do analyses on the FOK ratings obtained we need them
    % to be distributed along the scale 
    % (otherwise correlations are not possible)

    % First for all trials:
    FOK1 = 0;
    FOK2 = 0;
    FOK3 = 0;
    FOK4 = 0;
    FOK5 = 0;

    for i = 1:height(finaldata) %for each row (each trial) of data table 
        if finaldata {i,11} == 1 % see if FOK rating was 1
            FOK1 = FOK1 + 1; % if it is, add to FOK1 tally
        elseif finaldata {i,11} == 2 % check if FOK was 2
            FOK2 = FOK2 + 1; % add to tally
        elseif finaldata {i,11} == 3 % check if 3
            FOK3 = FOK3 + 1; % tally
        elseif finaldata {i,11} == 4 %if 4
            FOK4 = FOK4 + 1; % tally
        elseif finaldata {i,11} == 5 % if 5
            FOK5 = FOK5 + 1; %tally
        end
    end

    FOKtotal = FOK1 + FOK2 + FOK3 + FOK4 + FOK5; %add together, will be 78

    % Look at FOK rating distribution for No typed trials

    FOKratingsnew = zeros(78,1);

    for i = 1:height(finaldata)
        if finaldata {i,6} == 0
            FOKratingsnew (i,1) = finaldata{i,11};
        end
    end

    FOKratingsnew2 = nonzeros(FOKratingsnew');

    FOK1NoSuccess = 0;
    FOK2NoSuccess = 0;
    FOK3NoSuccess = 0;
    FOK4NoSuccess = 0;
    FOK5NoSuccess = 0;

    for i = 1:length(FOKratingsnew) 
        % repeat process from above but now only with no recall trials
        if FOKratingsnew (i,1) == 1
            FOK1NoSuccess = FOK1NoSuccess + 1;
        elseif FOKratingsnew (i,1) == 2
            FOK2NoSuccess = FOK2NoSuccess + 1;
        elseif FOKratingsnew (i,1) == 3
            FOK3NoSuccess = FOK3NoSuccess + 1;
        elseif FOKratingsnew (i,1) == 4
            FOK4NoSuccess = FOK4NoSuccess + 1;
        elseif FOKratingsnew (i,1) == 5
            FOK5NoSuccess = FOK5NoSuccess + 1;
        end
    end

    NoSuccessTrials = FOK1NoSuccess + FOK2NoSuccess + FOK3NoSuccess +...
        FOK4NoSuccess + FOK5NoSuccess; % Get total

    SuccessTrials = FOKtotal - NoSuccessTrials;
    % Get remaining Success trials

    %% Calculate "Correct" and "Incorrect" for typed trials

    CorrectTrials = 0;
    IncorrectTrials = 0;

    for i = 1:height(finaldata) % look through table of all data
        if finaldata{i,6} == 1 % see if recall was correct
            CorrectTrials = CorrectTrials + 1; % add to tally
        elseif finaldata {i,6} == 2 % if recall was incorrect
            IncorrectTrials = IncorrectTrials + 1; % add to tally
        end
    end

    %% Calculate number of restudies used
    % And if they reached their limit, what trial that occurred at

    restudies = sum(finaldata{:,15});
    maxrestudiestrial = 0;

    if restudies == (height(finaldata)/2)
        restudy = 0;
        test = sortrows(finaldata,12);
        for i = 1:height(test)
            if test{i,15} == 1
                restudy = restudy + 1;
                if restudy == (height(finaldata)/2)
                    maxrestudiestrial = i-1;
                    break
                end
            end
        end
    end

    %% Save "FOK Distribution" data

    % Compile

    numbers = zeros(1,15);
    numbers(1,1) = FOKtotal;
    numbers(1,2) = FOK1;
    numbers(1,3) = FOK2;
    numbers(1,4) = FOK3;
    numbers(1,5) = FOK4;
    numbers(1,6) = FOK5;
    numbers(1,7) = SuccessTrials;
    numbers(1,8) = CorrectTrials;
    numbers(1,9) = IncorrectTrials;
    numbers(1,10) = NoSuccessTrials;
    numbers(1,11) = FOK1NoSuccess;
    numbers(1,12) = FOK2NoSuccess;
    numbers(1,13) = FOK3NoSuccess;
    numbers(1,14) = FOK4NoSuccess;
    numbers(1,15) = FOK5NoSuccess;
    numbers(1,16) = restudies;
    numbers(1,17) = maxrestudiestrial;

    % Save in individual participant folder

    savedir2 = [exportfolder, '\', subjID, '\',...
        subjID, 'Numbers', '.csv'];
    numbersTable = array2table(numbers, 'VariableNames',...
        {'TotalTrials', 'FOK1', 'FOK2', 'FOK3', 'FOK4', 'FOK5', ...
        'PercivedSuccessfulRecallTrials', ...
        'ObjectivelyCorrectRecallTrials',...
        'ObjectivelyIncorrectRecallTrials', 'NoSuccessRecallTrials',...
        'FOK1NoSuccess', 'FOK2NoSuccess', 'FOK3NoSuccess', ...
        'FOK4NoSuccess','FOK5NoSuccess', 'RestudiesUsed', ...
        'TrialWhereMaxAllowedRestudiesReached'}); % convert to a table

    writetable(numbersTable, savedir2); % save in subject specific
    % folder as a CSV file

    % Save as a growing matrix file

    compiledfile = [genFolder,...
        '\Compiled Results\numberdistribution', date , '.txt'];

   if isfile(compiledfile)
       compileddata = load(compiledfile);
       compileddata = [compileddata; numbers];
       % File exists, import compiled data list
       % combine current data with compiled list, replace compiled
   else
       compileddata = numbers;
       % File does not exist. make compiled list equal to 
       % just this participants data
   end

    writematrix (compileddata, compiledfile); % save new compiled in full

    compileddatatable = array2table (compileddata, 'VariableNames',...
        {'TotalTrials', 'FOK1', 'FOK2', 'FOK3', 'FOK4', 'FOK5', ...
        'PercivedSuccessfulRecallTrials', ...
        'ObjectivelyCorrectRecallTrials',...
        'ObjectivelyIncorrectRecallTrials', 'NoSuccessRecallTrials',...
        'FOK1NoSuccess', 'FOK2NoSuccess', 'FOK3NoSuccess', ...
        'FOK4NoSuccess', 'FOK5NoSuccess', 'RestudiesUsed', ...
        'TrialWhereMaxAllowedRestudiesReached'}); % convert to a table

    tablename = [genFolder,...
        '\Compiled Results\NumberDistributionTable', date '.xlsx'];
    writetable (compileddatatable, tablename); % save table

    fprintf('Finished PreProcessing for %s.\n', subjID);
    
end

compileddatatable = [subjIDs, compileddatatable]; 
% add participant ID column
compileddatatable = renamevars...
    (compileddatatable,["Var1"], ["Participant ID"]);
writetable (compileddatatable, tablename); % save final table

compiledQCdatatable = [subjIDs, compiledQCdatatable]; 
% add participant ID column
compiledQCdatatable = renamevars...
    (compiledQCdatatable,["Var1"], ["Participant ID"]);
writetable (compiledQCdatatable, QCtablename); % save final table

fprintf('Finished preprocessing for everyone. \n'); 