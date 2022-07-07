%% Questionnaire Scoring for Personality Study

% June 23 2022

% Usage:
% Before you run for the first time:
% - Create Folder for this study (call it what you want) 
% - Within this Folder, create SubFolder called "Unprocessed Data"
% Before running for each batch of participants:
% - Put Qualtrics file as .xlsx doc in the "Unprocessed Data" folder
% - Change lines 17 (location to study folder) and 
% 23 - pFile (Qualtrics survery file name)
% - Press Run, once per "batch" of data

%% Import Data

genFolder = fullfile('');
% Insert path to study folder

pFolder = fullfile (genFolder, 'Unprocessed Data'); 
% Insert excel file name
pFile = fullfile(pFolder, ...
    '.xlsx');
batch = date;

data = readtable (pFile); % Imports CSV file downloaded from Qualtrics

compiledFolder = fullfile(genFolder, 'Compiled Results');
if not(isfolder(compiledFolder))
    mkdir(compiledFolder) % create compiled results folder
end

%% Participant ID List

IDs = data(:,{'Q7'}); % This Question has participant ID list

%% Score EC questionnaire
% Items 1, 2, 3, 4, 5 are I-type
% Items 6, 7, 8, 9, 10 are D-type
% No Reverse Scored items
% Likert from 1 to 4

% These are the strings contained in the table as responses
Likert1 = '1 = Almost never';
Likert2 = '2 = Sometimes';
Likert3 = '3 = Often';
Likert4 = '4 = Almost always';

% Get the 10 responses for each participant
EC = data(:,{'EC_1', 'EC_2', 'EC_3', 'EC_4' ,'EC_5', ...
    'EC_6', 'EC_7', 'EC_8', 'EC_9', 'EC_10'});

% Set up arrays to put scores into for each participant
ECI = zeros(height(data),1);
ECD = zeros(height(data),1);
ECTotal = zeros(height(data),1);

for i = 1:height(EC) % for each participant (aka each row)
    ECnum = zeros(1,10);
    for j = 1:10 % for each questions
        check = EC{i,j}; % get what the response is
        if strcmp(check,Likert1) == 1 % check it to see if its 1
            ECnum(1,j) = 1; % if so give a 1 score
        elseif strcmp(check,Likert2) == 1 % check if 2
            ECnum(1,j) = 2; % give 2 score
        elseif strcmp(check,Likert3) == 1 % check if 3
            ECnum(1,j) = 3; % give 3 score
        elseif strcmp(check,Likert4) == 1 % check if 4
            ECnum(1,j) = 4; % give 4 score
        end
    end
    ECI (i,1) = ECnum(1,1) + ECnum(1,2) + ECnum(1,3) + ECnum(1,4)...
        + ECnum(1,5); % add up 5 ECI questions
    ECD (i,1) = ECnum(1,6) + ECnum(1,7) + ECnum(1,8) + ECnum(1,9)...
        + ECnum(1,10); % add up 5 ECD questions
    % add ECI and ECD to get a total questionnaire score
    ECTotal (i,1) = ECI(i,1) + ECD(i,1);
end

%% Score PC Questionnaire
% S and D subscales, and some unassigned items
% No Reverse Scored items
% Likert from 1 to 4 (Same Anchors as EC)

% Get PC responses
PC = data(:,{'PC_1', 'PC_2', 'PC_3', 'PC_4' ,'PC_5', ...
    'PC_6', 'PC_7', 'PC_8', 'PC_9', 'PC_10', 'PC_11', ...
    'PC_12', 'PC_13', 'PC_14', 'PC_15', 'PC_16'});

% Set arrays to put scores into
PCD = zeros(height(data),1);
PCS = zeros(height(data),1);
Unassigned = zeros(height(data),1);
PCTotal = zeros(height(data),1);

for i = 1:height(PC) % for each row/participant
    PCnum = zeros(1,16);
    for j = 1:16 % for each prompt
        check = PC{i,j}; % check to see if 1, 2, 3, 4 and give that score
        if strcmp(check,Likert1) == 1
            PCnum(1,j) = 1;
        elseif strcmp(check,Likert2) == 1
            PCnum(1,j) = 2;
        elseif strcmp(check,Likert3) == 1
            PCnum(1,j) = 3;
        elseif strcmp(check,Likert4) == 1
            PCnum(1,j) = 4;
        end
    end
    PCD (i,1) = PCnum(1,1) + PCnum(1,2) + PCnum(1,3) + PCnum(1,4)...
        + PCnum(1,11) + PCnum(1,16); % add PC/D scores
    PCS (i,1) = PCnum(1,7) + PCnum(1,9) + PCnum(1,10) + PCnum(1,13)...
        + PCnum(1,14) + PCnum(1,15); % add PC/S scores
    % Add unassigned PC scores
    Unassigned (i,1) = PCnum(1,5) + PCnum(1,6) + PCnum(1,8) + PCnum(1,12); 
    % Add PC/S, PC/D and unassigned scores to get PC questionnaire total
    PCTotal (i,1) = PCS(i,1) + PCD(i,1) + Unassigned(i,1);
end

%% Intolerance of Uncertainty Scoring
% No Reverse Scored items
% All 1 scale, from 1 to 5

% Get IoU data
IoU = data(:,{'IOU_1', 'IOU_2', 'IOU_3', 'IOU_4' ,'IOU_5', ...
    'IOU_6', 'IOU_7', 'IOU_8', 'IOU_9', 'IOU_10', 'IOU_11', ...
    'IOU_12', 'IOU_13', 'IOU_14', 'IOU_15', 'IOU_16', 'IOU_17',...
    'IOU_18', 'IOU_19', 'IOU_20', 'IOU_21', 'IOU_22', 'IOU_23',...
    'IOU_24', 'IOU_25', 'IOU_26', 'IOU_27'});

IoU1 = '1';
IoU2 = '2';
IoU3 = '3';
IoU4 = '4';
IoU5 = '5';

IoUTotal = zeros(height(data), 1);
% 
% for i = 1:height(IoU) % for each row/participant
%     IoUnum = zeros(1,27);
%     for j = 1:27 % for each prompt
%         check = IoU{i,j}; 
% check to see if 1, 2, 3, 4,5 and give that score
%         if strcmp(check,IoU1) == 1
%             IoUnum(1,j) = 1;
%         elseif strcmp(check,IoU2) == 1
%             IoUnum(1,j) = 2;
%         elseif strcmp(check,IoU3) == 1
%             IoUnum(1,j) = 3;
%         elseif strcmp(check,IoU4) == 1
%             IoUnum(1,j) = 4;
%         elseif strcmp(check,IoU5) == 1
%             IoUnum(1,j) = 5;
%         end
%     end
%     IoUTotal (i,1) = sum(IoUnum);
% end

for i = 1:height(IoU) % for each row/participant
    IoUTotal (i,1) = sum(IoU{i,1:end});
end

%% Big 5 Questionnaire
% 5 subscales, Reverse Scored items indicated
% Extraversion = 1, 6R, 11, 16, 21R, 26, 31R, 36
% Agreeableness = 2R, 7, 12R, 17, 22, 27R, 32, 37R, 42
% Conscientiousness = 3, 8R, 13, 18R, 23R, 28, 33, 38, 43R
% Neuroticism = 4, 9R, 14, 19, 24R, 29, 34R, 39
% Openness = 5, 10, 15, 20, 25, 30, 35R, 40, 41R, 44

% Big 5 data
Big5 = data(:,{'B5_1', 'B5_2', 'B5_3', 'B5_4' ,'B5_5', 'B5_6',...
    'B5_7', 'B5_8', 'B5_9', 'B5_10', 'B5_11', 'B5_12', 'B5_13',...
    'B5_14', 'B5_15', 'B5_16', 'B5_17', 'B5_18', 'B5_19', 'B5_20',...
    'B5_21', 'B5_22', 'B5_23', 'B5_24', 'B5_25', 'B5_26', 'B5_27',...
    'B5_28', 'B5_29', 'B5_30', 'B5_31', 'B5_32', 'B5_33', 'B5_34',...
    'B5_35', 'B5_36', 'B5_37', 'B5_38', 'B5_39', 'B5_40', 'B5_41',...
    'B5_42', 'B5_43', 'B5_44'});

% Big 5 answers
Likert1 = '1 = Disagree strongly';
Likert2 = '2 = Disagree a little';
Likert3 = '3 = Neither agree nor disagree';
Likert4 = '4 = Agree a little';
Likert5 = '5 = Agree strongly';

% Items for each subscale
ExtraversionItems = [1,6,11,16,21,26,31,36];
AgreeablenessItems = [2,7,12,17,22,27,32,37,42];
ConscientiousnessItems = [3,8,13,18,23,28,33,38,43];
NeuroticismItems = [4,9,14,19,24,29,34,39];
OpennessItems = [5,10,15,20,25,30,35,40,41,44];

% Arrays to put scores into
Extraversion = zeros(height(data),1);
Agreeableness = zeros(height(data),1);
Conscientiousness = zeros(height(data),1);
Neuroticism = zeros(height(data),1);
Openness = zeros(height(data),1);

% these items are reverse scores
% so: 1 = 5, 2 = 4, 3 = 3, 4 = 2, 5 = 1
reversescored =...
    [2, 6, 8, 9, 12, 18, 21, 23, 24, 27, 31, 34, 35, 37, 41, 43];

for i = 1:height(Big5) % for each participant
    if strcmp (Big5{i,1}, 'NaN') == 0
        Extraversion1 = zeros(1,8);
        Agreeableness1 = zeros(1,9);
        Conscientiousness1 = zeros(1,9);
        Neuroticism1 = zeros(1,8);
        Openness1 = zeros(1,10);
        for j = 1:44 % for each question
            check = Big5{i,j};
            if sum(j == reversescored) > 0 % if its reverse scored
                if strcmp(check,Likert1) == 1 
                    % see if it is a response of 1
                    scorecheck = 5; % give score of 5
                elseif strcmp(check,Likert2) == 1
                    scorecheck = 4;
                elseif strcmp(check,Likert3) == 1
                    scorecheck = 3;
                elseif strcmp(check,Likert4) == 1
                    scorecheck = 2;
                elseif strcmp(check,Likert5) == 1
                    scorecheck = 1;
                end
            else % if not reverse scored
                if strcmp(check,Likert1) == 1 % check if its a 1
                    scorecheck = 1; % give a score of 1
                elseif strcmp(check,Likert2) == 1
                    scorecheck = 2;
                elseif strcmp(check,Likert3) == 1
                    scorecheck = 3;
                elseif strcmp(check,Likert4) == 1
                    scorecheck = 4;
                elseif strcmp(check,Likert5) == 1
                    scorecheck = 5;
                end
            end
            if sum(j == ExtraversionItems) > 0 
                % if its an Extraversion item
                Extraversion1 (i,j) = scorecheck;
                % add to extraversion array
            elseif sum(j == AgreeablenessItems) > 0 % if agreeablee
                Agreeableness1 (i,j) = scorecheck;
            elseif sum(j == ConscientiousnessItems) > 0 
                % if conscientiousness
                Conscientiousness1 (i,j) = scorecheck;
            elseif sum(j == NeuroticismItems) > 0 % if neuroticism
                Neuroticism1 (i,j) = scorecheck;
            elseif sum(j == OpennessItems) > 0 % if openness
                Openness1 (i,j) = scorecheck;
            end
        end
        % Add up each subscale scores
        Extraversion(i,1) = sum(Extraversion1(i,:));
        Agreeableness(i,1) = sum(Agreeableness1(i,:));
        Conscientiousness(i,1) = sum(Conscientiousness1(i,:));
        Neuroticism(i,1) = sum(Neuroticism1(i,:));
        Openness(i,1) = sum(Openness1(i,:));
    elseif strcmp (Big5{i,1}, 'NaN') > 0
        Extraversion(i,1) = NaN;
        Agreeableness(i,1) = NaN;
        Conscientiousness(i,1) = NaN;
        Neuroticism(i,1) = NaN;
        Openness(i,1) = NaN;
    end
end

%% Save Questionnaire Scores

% Compile all final scores into new array
Questionnaires = [ECI, ECD, ECTotal, PCD, PCS, Unassigned, PCTotal,...
    IoUTotal, Extraversion, Agreeableness, Conscientiousness,...
    Neuroticism, Openness];

%% Save questionnaire scores
% Save Table

%Convert final scores to table
compileddatatable = array2table (Questionnaires, 'VariableNames',...
    {'EpistemicCuriosityIType', 'EpistemicCuriosityDType',...
    'EpisetmicCuriosityTotal', 'PerceptualCuriosityDiversive',...
    'PerceptualCuriositySpecific', 'PerceptualCuriosityUnassigned',... 
    'PerceptualCursiosityTotal', 'IntoleranceOfUncertainity',...
    'Big5Extraversion', 'Big5Agreeableness', 'Big5Conscientiousness',...
    'Big5Neuroticism', 'Big5Openness'}); % convert to a table

% Add column with participant IDs, rename it and move it to 1st column
QuestionnaireScoreTable = [compileddatatable, IDs];
QuestionnaireScoreTable = renamevars...
    (QuestionnaireScoreTable,["Q7"], ["Participant ID"]);
QuestionnaireScoreTable = movevars(QuestionnaireScoreTable,...
    'Participant ID','Before','EpistemicCuriosityIType');

% Save as Excel fil (.xlsx)
tablename = [compiledFolder, '\Questionnaire Scores ', ...
        batch, '.xlsx'];
writetable (QuestionnaireScoreTable, tablename); % save table 

fprintf('Finished Questionnaire Scoring.\n');
