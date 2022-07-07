%% Task Data Analysis for Personality Study

% June 23, 2022

% Usage 
% Before you run for all data:
% - Ensure function called gkgammatst is in same folder as this script
% - Ensure Scoring and PreProcessing scripts has been run
% - Check Quality Control criteria to ensure participants meet these
% - Check FOK rating usage and determine if they fail to meet criteria for
% inclusion
% - Add participant IDs for sets that pass to Participant List Excel file
% (All in Column 1 going down, starting in Row 2, so under Participant ID 
%  in Row 1), ensure they are all correct and it will be caps sensitive
% - Ensure anyone who failed either of the QC or FOK usage criteria are
% not included on this participant list file
% - Change line 23 to have study folder path location
% - Run script once for all data 

%% Import Data

% Insert path to study folder
genFolder = fullfile('');
pFolder = fullfile (genFolder, 'Processed Data');

% import participant list that was created
participantlist = readtable ...
    (fullfile(genFolder, 'Participant List.xlsx'));
participantlist = sort(table2array(participantlist));

for k = 1:length(participantlist)

    % This section will locate participant's data and import it into 
    % MATLAB and will do so for each participant in order that they
    % appear in the Participant List file

    subjID = participantlist(k);
    subjID = char (subjID);
    subjfile = [subjID, '.csv'];

    data = readtable (fullfile (pFolder, subjID, subjfile));

    %% FOK - RT relationships
    % All trials

    [FOKRtrall, FOKRtpall] = corr (data{:,11},...
        data{:,7}, 'Type', 'Spearman'); % correlate FOK and RT columns
    if FOKRtpall <= 0.05
        RTsuccesssig = 1; % check and record sig
    else
        RTsuccesssig = 0;
    end

    FOK1RTall = 0;
    FOK2RTall = 0;
    FOK3RTall = 0;
    FOK4RTall = 0;
    FOK5RTall = 0;

    FOK1all = 0;
    FOK2all = 0;
    FOK3all = 0;
    FOK4all = 0;
    FOK5all = 0;

    % Check FOK rating
    % Add 1 to tally rating and add RT to total
    for i = 1:height(data)
        if data{i,11} == 1 % if FOK 5
            FOK1all = FOK1all + 1;
            FOK1RTall = FOK1RTall + data{i,7};
        elseif data{i,11} == 2 % repeat for rest of ratings
            FOK2all = FOK2all + 1;
            FOK2RTall = FOK2RTall + data{i,7};
        elseif data{i,11} == 3 %
            FOK3all = FOK3all + 1;
            FOK3RTall = FOK3RTall + data{i,7};
        elseif data{i,11} == 4 %
            FOK4all = FOK4all + 1;
            FOK4RTall = FOK4RTall + data{i,7};
        elseif data{i,11} == 5 %
            FOK5all = FOK5all + 1;
            FOK5RTall = FOK5RTall + data{i,7};
        end
    end

    FOK1RTallavg = FOK1RTall / FOK1all;
    FOK2RTallavg = FOK2RTall / FOK2all;
    FOK3RTallavg = FOK3RTall / FOK3all;
    FOK4RTallavg = FOK4RTall / FOK4all;
    FOK5RTallavg = FOK5RTall / FOK5all;

    % No success trials only
    % otherise typing differences may play a role 
    % (i.e., typing a full name will always be longer than not typing)
    norecalldata = [];

    for i = 1:height(data)
        if data {i,6} == 0
            norecalldata = [norecalldata; data{i,[6:12, 14:15]}];
        end
    end
    % make a new chart with only trials lacking in percived recall success

    [nosuccessr, nosuccessp] = corr (norecalldata(:,6),...
        norecalldata(:,2), 'Type', 'Spearman'); % correlate again
    if nosuccessp <= 0.05
        RTnosuccesssig = 1;
    else
        RTnosuccesssig = 0;
    end

    FOK1RTno = 0;
    FOK2RTno = 0;
    FOK3RTno = 0;
    FOK4RTno = 0;
    FOK5RTno = 0;

    FOK1no = 0;
    FOK2no = 0;
    FOK3no = 0;
    FOK4no = 0;
    FOK5no = 0;

    % Check FOK rating
    % Add 1 to tally rating and add RT to total
    for i = 1:height(norecalldata)
        if norecalldata(i,6) == 1 % if FOK 5
            FOK1no = FOK1no + 1;
            FOK1RTno = FOK1RTno + norecalldata(i,2);
        elseif norecalldata(i,6) == 2 % repeat for rest of ratings
            FOK2no = FOK2no + 1;
            FOK2RTno = FOK2RTno + norecalldata(i,2);
        elseif norecalldata(i,6) == 3 %
            FOK3no = FOK3no + 1;
            FOK3RTno = FOK3RTno + norecalldata(i,2);
        elseif norecalldata(i,6) == 4 %
            FOK4no = FOK4no + 1;
            FOK4RTno = FOK4RTno + norecalldata(i,2);
        elseif norecalldata(i,6) == 5 %
            FOK5no = FOK5no + 1;
            FOK5RTno = FOK5RTno + norecalldata(i,2);
        end
    end

    FOK1RTnoavg = FOK1RTno / FOK1no;
    FOK2RTnoavg = FOK2RTno / FOK2no;
    FOK3RTnoavg = FOK3RTno / FOK3no;
    FOK4RTnoavg = FOK4RTno / FOK4no;
    FOK5RTnoavg = FOK5RTno / FOK5no;

    %% Restudy Numbers

    restudies = sum(data{:,15});
    restudiesnosuccess = 0;
    nosuccess = 0;
    for i = 1:height(data)
        if data{i,6} == 0
            nosuccess = nosuccess + 1;
            if data{i,15} == 1
                restudiesnosuccess = restudiesnosuccess + 1;
            end
        end
    end

    maxrestudiestrial = height(data);

    if restudies == (height(data)/2)
        restudy = 0;
        test = sortrows(data,12);
        for i = 1:height(test)
            if test{i,15} == 1
                restudy = restudy + 1;
                if restudy == (height(data)/2)
                    maxrestudiestrial = i-1;
                    break
                end
            end
        end
    end

    restudyproportionall = restudies/height(data);
    restudyproportionnormalized = restudies/maxrestudiestrial;

    restudyproportionnosuccess = restudiesnosuccess /nosuccess;

    %% FOK - Restudy relationships (2 sections below)

    %% Restudy count for each rating vs FOK, All trials

    FOK1norestudyall = 0;
    FOK2norestudyall = 0;
    FOK3norestudyall = 0;
    FOK4norestudyall = 0;
    FOK5norestudyall = 0;

    FOK1restudyall = 0;
    FOK2restudyall = 0;
    FOK3restudyall = 0;
    FOK4restudyall = 0;
    FOK5restudyall = 0;

    % Check FOK rating and check restudy
    % Add 1 to either restudy or not restudy total for that rating
    for i = 1:height(data)
        if data{i,11} == 1 % if FOK 5
            if data{i,15} == 1 % if restudied
                FOK1restudyall = FOK1restudyall + 1;
                % + 1 to FOK5 restudy tally
            else  % else, must be not restudied
                FOK1norestudyall = FOK1norestudyall + 1; 
                % + 1 to FOK5 no restudy
            end
        elseif data{i,11} == 2 % repeat for rest of ratings
            if data{i,15} == 1
                FOK2restudyall = FOK2restudyall + 1;
            else
                FOK2norestudyall = FOK2norestudyall + 1;
            end
        elseif data{i,11} == 3 % 
            if data{i,15} == 1
                FOK3restudyall = FOK3restudyall + 1;
            else
                FOK3norestudyall = FOK3norestudyall + 1;
            end
        elseif data{i,11} == 4 % 
            if data{i,15} == 1
                FOK4restudyall = FOK4restudyall + 1;
            else
                FOK4norestudyall = FOK4norestudyall + 1;
            end
        elseif data{i,11} == 5 % 
            if data{i,15} == 1
                FOK5restudyall = FOK5restudyall + 1;
            else
                FOK5norestudyall = FOK5norestudyall + 1;
            end
        end
    end

    FOKvsrestudynoall = zeros (5,2); % save right vs wrong values

    FOKvsrestudynoall (1,1) = FOK1norestudyall;
    FOKvsrestudynoall (2,1) = FOK2norestudyall;
    FOKvsrestudynoall (3,1) = FOK3norestudyall;
    FOKvsrestudynoall (4,1) = FOK4norestudyall;
    FOKvsrestudynoall (5,1) = FOK5norestudyall;

    FOKvsrestudynoall (1,2) = FOK1restudyall;
    FOKvsrestudynoall (2,2) = FOK2restudyall;
    FOKvsrestudynoall (3,2) = FOK3restudyall;
    FOKvsrestudynoall (4,2) = FOK4restudyall;
    FOKvsrestudynoall (5,2) = FOK5restudyall;

    % Gamma Correlational Test

    % Call on gammastat function to calculate gamma correlation

    gkgammatst (FOKvsrestudynoall, 0.05, 1); 
    % matrix to be analyzed, alpha, tail, NEED TO DOWNLOAD FILE

    FOKRestudyGammaAll = g; % this is the correlation value
    FOKRestudySignificanceAll = significance; 
    % this is a 1 or 0 to represent if its significant or not

    FOK1RestudyPropAll = FOK1restudyall /...
        (FOK1restudyall + FOK1norestudyall)*100;
    FOK2RestudyPropAll = FOK2restudyall /...
        (FOK2restudyall + FOK2norestudyall)*100;
    FOK3RestudyPropAll = FOK3restudyall /...
        (FOK3restudyall + FOK3norestudyall)*100;
    FOK4RestudyPropAll = FOK4restudyall /...
        (FOK4restudyall + FOK4norestudyall)*100;
    FOK5RestudyPropAll = FOK5restudyall /...
        (FOK5restudyall + FOK5norestudyall)*100;
    % Get Proportions to store 

    %% Restudy count for each rating vs FOK, for no success trials only, 
    % *most relevant*

    FOK1norestudy = 0;
    FOK2norestudy = 0;
    FOK3norestudy = 0;
    FOK4norestudy = 0;
    FOK5norestudy = 0;

    FOK1restudy = 0;
    FOK2restudy = 0;
    FOK3restudy = 0;
    FOK4restudy = 0;
    FOK5restudy = 0;

    % Check FOK rating and check restudy
    % Add 1 to either restudy or not restudy total for that rating
    for i = 1:height(data)
        if data{i,6} == 0 % if recall unsuccessful
            if data{i,11} == 1 % if FOK 5
                if data{i,15} == 1 % if restudied
                    FOK1restudy = FOK1restudy + 1;
                    % + 1 to FOK5 restudy tally
                else  % else, must be not restudied
                    FOK1norestudy = FOK1norestudy + 1; 
                    % + 1 to FOK5 no restudy
                end
            elseif data{i,11} == 2 % repeat for rest of ratings
                if data{i,15} == 1
                    FOK2restudy = FOK2restudy + 1;
                else
                    FOK2norestudy = FOK2norestudy + 1;
                end
            elseif data{i,11} == 3 % 
                if data{i,15} == 1
                    FOK3restudy = FOK3restudy + 1;
                else
                    FOK3norestudy = FOK3norestudy + 1;
                end
            elseif data{i,11} == 4 % 
                if data{i,15} == 1
                    FOK4restudy = FOK4restudy + 1;
                else
                    FOK4norestudy = FOK4norestudy + 1;
                end
            elseif data{i,11} == 5 % 
                if data{i,15} == 1
                    FOK5restudy = FOK5restudy + 1;
                else
                    FOK5norestudy = FOK5norestudy + 1;
                end
            end
        end
    end

    FOKvsrestudyno = zeros (5,2); % save right vs wrong values

    FOKvsrestudyno (1,1) = FOK1norestudy;
    FOKvsrestudyno (2,1) = FOK2norestudy;
    FOKvsrestudyno (3,1) = FOK3norestudy;
    FOKvsrestudyno (4,1) = FOK4norestudy;
    FOKvsrestudyno (5,1) = FOK5norestudy;

    FOKvsrestudyno (1,2) = FOK1restudy;
    FOKvsrestudyno (2,2) = FOK2restudy;
    FOKvsrestudyno (3,2) = FOK3restudy;
    FOKvsrestudyno (4,2) = FOK4restudy;
    FOKvsrestudyno (5,2) = FOK5restudy;

    % Gamma Correlational Test

    % Call on gammastat function to calculate gamma correlation

    gkgammatst (FOKvsrestudyno, 0.05, 1); 
    % matrix to be analyzed, alpha, tail, NEED TO DOWNLOAD FILE

    FOKRestudyGammaNoSuccess = g; % this is the correlation value
    FOKRestudySignificanceNoSuccess = significance;
    % this is a 1 or 0 to represent if its significant or not

    FOK1RestudyPropNoSuccess = FOK1restudy /...
        (FOK1restudy + FOK1norestudy)*100;
    FOK2RestudyPropNoSuccess = FOK2restudy /...
        (FOK2restudy + FOK2norestudy)*100;
    FOK3RestudyPropNoSuccess = FOK3restudy /...
        (FOK3restudy + FOK3norestudy)*100;
    FOK4RestudyPropNoSuccess = FOK4restudy /...
        (FOK4restudy + FOK4norestudy)*100;
    FOK5RestudyPropNoSuccess = FOK5restudy /...
        (FOK5restudy + FOK5norestudy)*100;

    %% RT - Restudy relationships
    % for no success only trials
    norestudy = 0;
    norestudyRT = 0;
    restudy = 0;
    restudyRT = 0;

    for i = 1:height(data)
        if data {i,6} == 0
            if data{i,15} == 0
                norestudy = norestudy + 1;
                norestudyRT = norestudyRT + data{i,7};
            elseif data{i,15} == 1
                restudy = restudy + 1;
                restudyRT = restudyRT + data{i,7};
            end
        end
    end

    norestudyRTavg = norestudyRT / norestudy;
    restudyRTavg = restudyRT / restudy;

    %% FOK - Satisfaction Relationships
    % wont have enough trials across scale to do correlations
    % instead group trials into low (FOK 1 or 2) and high (3 4 5)
    % FOK trials and look at average satisfaction ratings for them
    % (if they are selected for restudy, naturally since these are the 
    % only ones we have these ratings for

    highFOKsatall = 0;
    highFOKall = 0;
    lowFOKsatall = 0;
    lowFOKall = 0;

    highFOKsat = 0;
    highFOK = 0;
    lowFOKsat = 0;
    lowFOK = 0;

    for i = 1:height(data) % do it for all trials
        if (data{i,11} == 1) + (data{i,11} == 2) > 0
            if data{i,15} == 1
                lowFOKall = lowFOKall + 1;
                lowFOKsatall = lowFOKsatall + data{i,16};
            end
        elseif (data{i,11} == 3) + (data{i,11} == 4) +...
                (data{i,11} == 5) > 0
            if data{i,15} == 1
                highFOKall = highFOKall + 1;
                highFOKsatall = highFOKsatall + data{i,16};
            end
        end
    end

    for i = 1:height(data) % repeat for no success
        if data{i,6} == 0
            if (data{i,11} == 1) + (data{i,11} == 2) > 0
                if data{i,15} == 1
                    lowFOK = lowFOK + 1;
                    lowFOKsat = lowFOKsat + data{i,16};
                end
            elseif (data{i,11} == 3) + (data{i,11} == 4) +...
                    (data{i,11} == 5) > 0
                if data{i,15} == 1
                    highFOK = highFOK + 1;
                    highFOKsat = highFOKsat + data{i,16};
                end
            end
        end
    end

    lowFOKsatallavg = lowFOKsatall / lowFOKall;
    highFOKsatallavg = highFOKsatall / highFOKall;
    highlowdiffall = highFOKsatallavg - lowFOKsatallavg;

    lowFOKsatavg = lowFOKsat / lowFOK;
    highFOKsatavg = highFOKsat / highFOK;
    highlowdiff = highFOKsatavg - lowFOKsatavg;

    %% Compile

    processeddata = zeros(1,43);
    processeddata(1,1) = FOKRtrall;
    processeddata(1,2) = FOKRtpall;
    processeddata(1,3) = RTsuccesssig;
    processeddata(1,4) = FOK1RTallavg;
    processeddata(1,5) = FOK2RTallavg;
    processeddata(1,6) = FOK3RTallavg;
    processeddata(1,7) = FOK4RTallavg;
    processeddata(1,8) = FOK5RTallavg;

    processeddata(1,9) = nosuccessr;
    processeddata(1,10) = nosuccessp;
    processeddata(1,11) = RTnosuccesssig;
    processeddata(1,12) = FOK1RTnoavg;
    processeddata(1,13) = FOK2RTnoavg;
    processeddata(1,14) = FOK3RTnoavg;
    processeddata(1,15) = FOK4RTnoavg;
    processeddata(1,16) = FOK5RTnoavg;

    processeddata(1,17) = FOK1RestudyPropAll;
    processeddata(1,18) = FOK2RestudyPropAll;
    processeddata(1,19) = FOK3RestudyPropAll;
    processeddata(1,20) = FOK4RestudyPropAll;
    processeddata(1,21) = FOK5RestudyPropAll;
    processeddata(1,22) = FOKRestudyGammaAll;
    processeddata(1,23) = FOKRestudySignificanceAll;

    processeddata(1,24) = FOK1RestudyPropNoSuccess;
    processeddata(1,25) = FOK2RestudyPropNoSuccess;
    processeddata(1,26) = FOK3RestudyPropNoSuccess;
    processeddata(1,27) = FOK4RestudyPropNoSuccess;
    processeddata(1,28) = FOK5RestudyPropNoSuccess;
    processeddata(1,29) = FOKRestudyGammaNoSuccess;
    processeddata(1,30) = FOKRestudySignificanceNoSuccess;

    processeddata(1,31) = restudies;
    processeddata(1,32) = restudiesnosuccess;
    processeddata(1,33) = restudyproportionall;
    processeddata(1,34) = restudyproportionnormalized;
    processeddata(1,35) = restudyproportionnosuccess;

    processeddata(1,36) = norestudyRTavg;
    processeddata(1,37) = restudyRTavg;

    processeddata(1,38) = lowFOKsatallavg;
    processeddata(1,39) = highFOKsatallavg;
    processeddata(1,40) = highlowdiffall;
    processeddata(1,41) = lowFOKsatavg;
    processeddata(1,42) = highFOKsatavg;
    processeddata(1,43) = highlowdiff;

    %% Saving Data

    exportfolder = fullfile(genFolder, 'Processed Data');
    savedir = [exportfolder, '/', subjID, '/', subjID,...
        'DataTrends', '.csv'];
    dataTable = array2table(processeddata, 'VariableNames',...
        {'FOKRTCorrelationAll', 'FOKRTCorrelationPAll', ...
        'FOKRTCorrelationSignificanceAll', 'FOK1AverageRTAll', ...
        'FOK2AverageRTAll', 'FOK3AverageRTAll', 'FOK4AverageRTAll', ...
        'FOK5AverageRTAll', 'FOKRTCorrelationNoSuccess', ...
        'FOKRTCorrelationPNoSuccess', ...
        'FOKRTCorrelationSignificanceNoSuccess', ...
        'FOK1AverageRTNoSuccess' ,'FOK2AverageRTNoSuccess', ...
        'FOK3AverageRTNoSuccess', 'FOK4AverageRTNoSuccess', ...
        'FOK5AverageRTNoSuccess','FOK1AllRestudyProportion', ...
        'FOK2AllRestudyProportion', 'FOK3AllRestudyProportion', ...
        'FOK4AllRestudyProportion', 'FOK5AllRestudyProportion', ...
        'FOKRestudyAllGamma','FOKRestudyAllSignificance', ...
        'FOK1NoSuccessRestudyProportion', ...
        'FOK2NoSuccessRestudyProportion', ...
        'FOK3NoSuccessRestudyProportion',...
        'FOK4NoSuccessRestudyProportion', ...
        'FOK5NoSuccessRestudyProportion',...
        'FOKRestudyNoSuccessGamma', 'FOKRestudyNoSuccessSignificance', ...
        'RestudiesAll', 'RestudiesNoSuccess', 'AllRestudyProportion', ...
        'RestudyProportionNormalized', 'NoSuccessRestudyProportion', ...
        'NoRestudyRTAverage', 'RestudyRTAverage', ...
        'LowFOKAverageSatisfactionAll' ,...
        'HighFOKAverageSatisfactionAll', ...
        'AllTrialHighLowFOKSatisfactionDifference'...
        'LowFOKAverageSatisfactionNoSuccess',...
        'HighFOKAverageSatisfactionNoSuccess' ...
        'NoSuccessHighLowFOKSatisfactionDifference'}); 
    % convert to a table

    writetable(dataTable, savedir); % save in subject specific folder as
    % a CSV file

    compiledfile = [genFolder, '/Compiled Results/DataTrends.txt'];

    if isfile(compiledfile)
        compileddata = load(compiledfile);
        compileddata = [compileddata; processeddata];
        % File exists, import master data list
        % combine current data with master list, replace master
    else
        compileddata = processeddata;
        % File does not exist. make master list equal to 
        % just this participants data
    end

    writematrix (compileddata, compiledfile); % save new master in fill

    compileddatatable = array2table(compileddata, 'VariableNames',...
        {'FOKRTCorrelationAll', 'FOKRTCorrelationPAll', ...
        'FOKRTCorrelationSignificanceAll', 'FOK1AverageRTAll', ...
        'FOK2AverageRTAll', 'FOK3AverageRTAll', 'FOK4AverageRTAll', ...
        'FOK5AverageRTAll', 'FOKRTCorrelationNoSuccess', ...
        'FOKRTCorrelationPNoSuccess', ...
        'FOKRTCorrelationSignificanceNoSuccess', ...
        'FOK1AverageRTNoSuccess' ,'FOK2AverageRTNoSuccess', ...
        'FOK3AverageRTNoSuccess', 'FOK4AverageRTNoSuccess', ...
        'FOK5AverageRTNoSuccess','FOK1AllRestudyProportion', ...
        'FOK2AllRestudyProportion', 'FOK3AllRestudyProportion', ...
        'FOK4AllRestudyProportion', 'FOK5AllRestudyProportion', ...
        'FOKRestudyAllGamma','FOKRestudyAllSignificance', ...
        'FOK1NoSuccessRestudyProportion', ...
        'FOK2NoSuccessRestudyProportion', ...
        'FOK3NoSuccessRestudyProportion',...
        'FOK4NoSuccessRestudyProportion', ...
        'FOK5NoSuccessRestudyProportion',...
        'FOKRestudyNoSuccessGamma', 'FOKRestudyNoSuccessSignificance', ...
        'RestudiesAll', 'RestudiesNoSuccess', 'AllRestudyProportion', ...
        'RestudyProportionNormalized', 'NoSuccessRestudyProportion', ...
        'NoRestudyRTAverage', 'RestudyRTAverage', ...
        'LowFOKAverageSatisfactionAll' ,...
        'HighFOKAverageSatisfactionAll', ...
        'AllTrialHighLowFOKSatisfactionDifference'...
        'LowFOKAverageSatisfactionNoSuccess',...
        'HighFOKAverageSatisfactionNoSuccess' ...
        'NoSuccessHighLowFOKSatisfactionDifference'}); 

    tablename = [genFolder, '/Compiled Results/DataTrendsTable.xlsx'];
    writetable (compileddatatable, tablename); % save table

    fprintf('Finished Analysis for %s.\n', subjID);

end

compileddatatable = [participantlist, compileddatatable];
compileddatatable = renamevars...
    (compileddatatable,["Var1"], ["Participant ID"]);

writetable (compileddatatable, tablename); % save table

fprintf('Finished analysis for everyone.\n'); 
