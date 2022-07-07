/******************************************** 
 * Memory And Motivation - Personality Test *
 ********************************************/

import { PsychoJS } from './lib/core-2020.1.js';
import * as core from './lib/core-2020.1.js';
import { TrialHandler } from './lib/data-2020.1.js';
import { Scheduler } from './lib/util-2020.1.js';
import * as util from './lib/util-2020.1.js';
import * as visual from './lib/visual-2020.1.js';
import * as sound from './lib/sound-2020.1.js';

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0.5, 0.5, 0.5]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'Memory and Motivation - Personality';  // from the Builder filename that created this script
let expInfo = {'participant': ''};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(prep_codeRoutineBegin());
flowScheduler.add(prep_codeRoutineEachFrame());
flowScheduler.add(prep_codeRoutineEnd());
flowScheduler.add(dummy_codeRoutineBegin());
flowScheduler.add(dummy_codeRoutineEachFrame());
flowScheduler.add(dummy_codeRoutineEnd());
flowScheduler.add(experiment_instructionsRoutineBegin());
flowScheduler.add(experiment_instructionsRoutineEachFrame());
flowScheduler.add(experiment_instructionsRoutineEnd());
flowScheduler.add(ITI500RoutineBegin());
flowScheduler.add(ITI500RoutineEachFrame());
flowScheduler.add(ITI500RoutineEnd());
flowScheduler.add(phase1_instructionsRoutineBegin());
flowScheduler.add(phase1_instructionsRoutineEachFrame());
flowScheduler.add(phase1_instructionsRoutineEnd());
flowScheduler.add(ITI500RoutineBegin());
flowScheduler.add(ITI500RoutineEachFrame());
flowScheduler.add(ITI500RoutineEnd());
flowScheduler.add(Dummy_encodeRoutineBegin());
flowScheduler.add(Dummy_encodeRoutineEachFrame());
flowScheduler.add(Dummy_encodeRoutineEnd());
flowScheduler.add(ITI500RoutineBegin());
flowScheduler.add(ITI500RoutineEachFrame());
flowScheduler.add(ITI500RoutineEnd());
const memorize_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(memorize_loopLoopBegin, memorize_loopLoopScheduler);
flowScheduler.add(memorize_loopLoopScheduler);
flowScheduler.add(memorize_loopLoopEnd);
flowScheduler.add(phase_finishRoutineBegin());
flowScheduler.add(phase_finishRoutineEachFrame());
flowScheduler.add(phase_finishRoutineEnd());
flowScheduler.add(phase2_FOKinstructionsRoutineBegin());
flowScheduler.add(phase2_FOKinstructionsRoutineEachFrame());
flowScheduler.add(phase2_FOKinstructionsRoutineEnd());
flowScheduler.add(ITI500RoutineBegin());
flowScheduler.add(ITI500RoutineEachFrame());
flowScheduler.add(ITI500RoutineEnd());
const FOKdummyloopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(FOKdummyloopLoopBegin, FOKdummyloopLoopScheduler);
flowScheduler.add(FOKdummyloopLoopScheduler);
flowScheduler.add(FOKdummyloopLoopEnd);
const judgement_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(judgement_loopLoopBegin, judgement_loopLoopScheduler);
flowScheduler.add(judgement_loopLoopScheduler);
flowScheduler.add(judgement_loopLoopEnd);
flowScheduler.add(phase_finishRoutineBegin());
flowScheduler.add(phase_finishRoutineEachFrame());
flowScheduler.add(phase_finishRoutineEnd());
flowScheduler.add(phase3_instructionsRoutineBegin());
flowScheduler.add(phase3_instructionsRoutineEachFrame());
flowScheduler.add(phase3_instructionsRoutineEnd());
flowScheduler.add(ITI500RoutineBegin());
flowScheduler.add(ITI500RoutineEachFrame());
flowScheduler.add(ITI500RoutineEnd());
const restudytrial_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(restudytrial_loopLoopBegin, restudytrial_loopLoopScheduler);
flowScheduler.add(restudytrial_loopLoopScheduler);
flowScheduler.add(restudytrial_loopLoopEnd);
flowScheduler.add(phase_finishRoutineBegin());
flowScheduler.add(phase_finishRoutineEachFrame());
flowScheduler.add(phase_finishRoutineEnd());
flowScheduler.add(FOKexp_exitRoutineBegin());
flowScheduler.add(FOKexp_exitRoutineEachFrame());
flowScheduler.add(FOKexp_exitRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var prep_codeClock;
var insheet;
var numtrial;
var numstudy;
var numnovel;
var numnames;
var numfemalenames;
var nummalenames;
var numfaces;
var numfemalefaces;
var numbffaces;
var numwffaces;
var nummalefaces;
var numbmfaces;
var numwmfaces;
var numstudyfemale;
var numstudymale;
var numnovelfemale;
var numnovelmale;
var numstudybf;
var numstudybm;
var numstudywf;
var numstudywm;
var numnovelbf;
var numnovelbm;
var numnovelwf;
var numnovelwm;
var shuffle;
var dummy_codeClock;
var numdummy;
var dummyface;
var dummyname;
var row;
var experiment_instructionsClock;
var exp_instruct;
var exp_continue;
var ITI500Clock;
var fix500;
var phase1_instructionsClock;
var encode_instruct;
var phase1_cont;
var Dummy_encodeClock;
var Dummy_name;
var dummy_image;
var memorize_codeClock;
var study_order;
var study_trial;
var resttrial;
var restbreakClock;
var rest_text;
var rest_cont;
var restText2;
var phase1_encodeClock;
var encode_name;
var encode_face;
var phase_finishClock;
var phase_finishtext;
var finish_cont;
var phase2_FOKinstructionsClock;
var FOKjudgement_instruct;
var phase2FOKcont_resp;
var dummyFOK_codeClock;
var dummyFOK_order;
var dummyFOK_trial;
var Dummy_recallClock;
var dummy_stim;
var dummy_recallprompt;
var dummy_recall_info;
var text2;
var Dummy_FOKClock;
var dummyFOK_prompt;
var dummy_scale;
var dummy_response;
var judgement_codeClock;
var FOKtest_order;
var FOKtest_trial;
var judgementcatch;
var judgementcatch1;
var judgementcatch2;
var phase2_instructreminder1Clock;
var text_2;
var key_resp;
var catch_trialClock;
var catch_cue;
var key_catch;
var catch_prompt;
var phase2_recallattemptClock;
var recall_prompt;
var FOKtestface;
var recall_info;
var text;
var displayText;
var copyText;
var phase2_FOKClock;
var FOK_prompt;
var FOK_resp;
var FOK_scale;
var phase3_instructionsClock;
var restudy_instruct;
var phase3_cont;
var restudy_codeClock;
var restudy_order;
var restudies;
var restudy_trial;
var restudycatch;
var restudycatch1;
var restudycatch2;
var phase3_restudychoiceClock;
var restudyprompt;
var restudy_scale;
var option_face;
var key_restudychoice;
var countdown_prompt;
var countdown;
var phase3_encodeClock;
var restudyname;
var restudyface;
var satisfactionClock;
var satisfaction_prompt;
var satisfaction_rating;
var satisfaction_scale;
var FOKexp_exitClock;
var FOK_cont_text;
var FOK_cont_resp;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "prep_code"
  prep_codeClock = new util.Clock();
  insheet = [];
  function successFunction(data) {
      var allRows = data.split('\n'); // split rows at new line
      var headerRows = allRows[0].split(',');
      
      for (var i=1; i<allRows.length; i++) {
          var obj = {};
          var currentLine = allRows[i].split(',');
          for(var j=0;j<headerRows.length;j++){
                obj[headerRows[j]] = currentLine[j];
          }
          insheet.push(obj);
      }
  }
  
  $.ajax({
    url: 'resources/stimuli_list.csv',
    dataType: 'text',
    async: false,
  }).done(successFunction);
  numtrial = 78;
  numstudy = 78;
  numnovel = 0;
  numnames = 156;
  numfemalenames = 78;
  nummalenames = 78;
  numfaces = 78;
  numfemalefaces = 39;
  numbffaces = 9;
  numwffaces = 30;
  nummalefaces = 39;
  numbmfaces = 9;
  numwmfaces = 30;
  numstudyfemale = 39;
  numstudymale = 39;
  numnovelfemale = 0;
  numnovelmale = 0;
  numstudybf = 9;
  numstudybm = 9;
  numstudywf = 30;
  numstudywm = 30;
  numnovelbf = 0;
  numnovelbm = 0;
  numnovelwf = 0;
  numnovelwm = 0;
  shuffle = function (a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
          }
      return a;
      }
  
  // Initialize components for Routine "dummy_code"
  dummy_codeClock = new util.Clock();
  numdummy = 2;
  
  dummyface = [];
  dummyname = [];
  row = []; 
  
  for (var rowx = 0, _pj_a = numdummy; (rowx < _pj_a); rowx += 1) {
      row = insheet[rowx];
      const {DummyFace: dummyfacefile} = row; 
      if ((rowx < 1)) {
          dummyface.push(dummyfacefile);
      }else {
          dummyface.push(dummyfacefile)
      }
  }
  row = []; 
  
  for (var rowx = 0, _pj_a = numdummy; (rowx < _pj_a); rowx += 1) {
      row = insheet[rowx];
      const {DummyName: dummynamefull} = row;
      if ((rowx < 1)) {
          dummyname.push(dummynamefull);
      }else {
          dummyname.push(dummynamefull)
      }
  }
  // Initialize components for Routine "experiment_instructions"
  experiment_instructionsClock = new util.Clock();
  exp_instruct = new visual.TextStim({
    win: psychoJS.window,
    name: 'exp_instruct',
    text: 'In this experiment you will complete 3 experimental phases. Prior to the start of each phase, detailed instructions outlining what to do in that phase will be presented on-screen. \nAfter you read the instructions and are ready to begin press Space to start that phase. During the experiment, please follow all of the instructions carefully. \nPlease do not exit and restart the task.\n\nPlease sit facing your computer at a comfortable distance. Do your best to keep focused on the task and refrain from engaging with distractions in your surroundings for the duration of the experiment. \n\nPress Space To Continue',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, 0], height: 0.06,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  exp_continue = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ITI500"
  ITI500Clock = new util.Clock();
  fix500 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fix500', 
    vertices: 'cross', size:[0.02, 0.02],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "phase1_instructions"
  phase1_instructionsClock = new util.Clock();
  encode_instruct = new visual.TextStim({
    win: psychoJS.window,
    name: 'encode_instruct',
    text: 'In this part a series of faces will appear on-screen individually with a name beneath it.\nPlease memorize the full name of each person while it is on the screen. \nThe experiment will automatically proceed with no need for any keyboard presses. You will get a short break halfway through the phase to help you keep focused.\n\nPress Space To Continue',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, 0], height: 0.08,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  phase1_cont = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ITI500"
  ITI500Clock = new util.Clock();
  fix500 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fix500', 
    vertices: 'cross', size:[0.02, 0.02],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "Dummy_encode"
  Dummy_encodeClock = new util.Clock();
  Dummy_name = new visual.TextStim({
    win: psychoJS.window,
    name: 'Dummy_name',
    text: 'default text',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.15,  wrapWidth: 1.8, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  dummy_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'dummy_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0.08], size : [1, 0.8],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "ITI500"
  ITI500Clock = new util.Clock();
  fix500 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fix500', 
    vertices: 'cross', size:[0.02, 0.02],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "memorize_code"
  memorize_codeClock = new util.Clock();
  study_order = [];
  for (var i = 0; i < numstudy; i++) {
      study_order.push(i);
  }
  
  shuffle(study_order);
  study_trial = 0;
  
  resttrial = (numstudy/2);
  // Initialize components for Routine "restbreak"
  restbreakClock = new util.Clock();
  rest_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'rest_text',
    text: 'You are halfway through! You are doing great!\n\n',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, 0.1], height: 0.1,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  rest_cont = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  restText2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'restText2',
    text: 'Press Space To Continue Experiment',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "ITI500"
  ITI500Clock = new util.Clock();
  fix500 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fix500', 
    vertices: 'cross', size:[0.02, 0.02],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "phase1_encode"
  phase1_encodeClock = new util.Clock();
  encode_name = new visual.TextStim({
    win: psychoJS.window,
    name: 'encode_name',
    text: 'default text',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.15,  wrapWidth: 1.8, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  encode_face = new visual.ImageStim({
    win : psychoJS.window,
    name : 'encode_face', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0.08], size : [1, 0.8],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "ITI500"
  ITI500Clock = new util.Clock();
  fix500 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fix500', 
    vertices: 'cross', size:[0.02, 0.02],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "phase_finish"
  phase_finishClock = new util.Clock();
  phase_finishtext = new visual.TextStim({
    win: psychoJS.window,
    name: 'phase_finishtext',
    text: 'Phase Finished!\n\nPress Space To Continue Experiment',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  finish_cont = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "phase2_FOKinstructions"
  phase2_FOKinstructionsClock = new util.Clock();
  FOKjudgement_instruct = new visual.TextStim({
    win: psychoJS.window,
    name: 'FOKjudgement_instruct',
    text: 'Next, faces will appear on the screen and you must try and recall that persons full name.\nPlease type the name, or any part of it that you do remember. Once you are finished typing this information press Enter. If you cannot recall anything, press Enter without typing anything, as there is no need to guess.\nThen, you will be asked to judge how likely it is, from 1 to 5, that you could correctly recognize that persons name if shown to you. \nOn this scale, 1 is for trials in which you are least likely to recognize the name and 5 is for trials where you are most likely to recognize it. Please distribute your responses across the entire 1 to 5 scale, and keep in mind that these ratings are about whether you think you could recognize the name if given and not about whether you can recall it right now.\nThe experiment will proceed once these answers are provided.\nRandomly throughout the phase you may see a blue square on the screen. When you see this square please press "0" as quickly as you can.\n\nPress Space To Continue',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  phase2FOKcont_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ITI500"
  ITI500Clock = new util.Clock();
  fix500 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fix500', 
    vertices: 'cross', size:[0.02, 0.02],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "dummyFOK_code"
  dummyFOK_codeClock = new util.Clock();
  dummyFOK_order = [];
  for (var i = 0; i < numdummy; i++) {
      dummyFOK_order.push(i);
  }
  
  shuffle(dummyFOK_order);
  
  dummyFOK_trial = 0;
  
  // Initialize components for Routine "Dummy_recall"
  Dummy_recallClock = new util.Clock();
  dummy_stim = new visual.ImageStim({
    win : psychoJS.window,
    name : 'dummy_stim', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, (- 0.15)], size : [0.88, 0.68],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  dummy_recallprompt = new visual.TextStim({
    win: psychoJS.window,
    name: 'dummy_recallprompt',
    text: 'What is their name?',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, 0.45], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  dummy_recall_info = new visual.TextStim({
    win: psychoJS.window,
    name: 'dummy_recall_info',
    text: 'Press Enter when done, or if you cannot recall.',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, 0.35], height: 0.08,  wrapWidth: 1.7, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text2',
    text: '',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, 0.25], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "Dummy_FOK"
  Dummy_FOKClock = new util.Clock();
  dummyFOK_prompt = new visual.TextStim({
    win: psychoJS.window,
    name: 'dummyFOK_prompt',
    text: 'How likely is it you could recognize their name?\n\n',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, 0.2], height: 0.1,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  dummy_scale = new visual.TextStim({
    win: psychoJS.window,
    name: 'dummy_scale',
    text: '1 = trials where recognition is least likely\n5 = trials where recognition is most likely',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.08,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  dummy_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ITI500"
  ITI500Clock = new util.Clock();
  fix500 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fix500', 
    vertices: 'cross', size:[0.02, 0.02],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "judgement_code"
  judgement_codeClock = new util.Clock();
  FOKtest_order = [];
  for (var i = 0; i < numtrial; i++) {
      FOKtest_order.push(i);
  }
  
  shuffle(FOKtest_order);
  FOKtest_trial = 0;
  
  judgementcatch = [];
  for (var i = 0; i < (numtrial/2); i++) {
      judgementcatch.push(i);
  }
  
  shuffle(judgementcatch);
  
  judgementcatch1 = judgementcatch[0];
  
  if (judgementcatch1 === 0 || judgementcatch1 === ((numtrial/2)-1)) {
      judgementcatch1 = judgementcatch[1]
  }
  
  if (judgementcatch1 === 0 || judgementcatch1 === ((numtrial/2)-1)) {
      judgementcatch1 = judgementcatch[2]
  }
  
  shuffle(judgementcatch);
  
  judgementcatch2 = judgementcatch[0]
  
  if (judgementcatch2 === 0 || judgementcatch2 === ((numtrial/2)-1)) {
      judgementcatch2 = judgementcatch[1]
  }
  
  if (judgementcatch2 === 0 || judgementcatch2 === ((numtrial/2)-1)) {
      judgementcatch2 = judgementcatch[2]
  }
  
  judgementcatch2 = judgementcatch2 + (numtrial/2);
  
  
  // Initialize components for Routine "phase2_instructreminder1"
  phase2_instructreminder1Clock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'You are halfway through. You are doing great! Please keep using the entire scale. \n\nPress Space to Continue',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ITI500"
  ITI500Clock = new util.Clock();
  fix500 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fix500', 
    vertices: 'cross', size:[0.02, 0.02],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "catch_trial"
  catch_trialClock = new util.Clock();
  catch_cue = new visual.Rect ({
    win: psychoJS.window, name: 'catch_cue', 
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0, pos: [0, (- 0.12)],
    lineWidth: 1, lineColor: new util.Color([(- 0.5), (- 0.85), 0.7]),
    fillColor: new util.Color([(- 0.5), (- 0.85), 0.7]),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  key_catch = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  catch_prompt = new visual.TextStim({
    win: psychoJS.window,
    name: 'catch_prompt',
    text: 'Please Press The "0" Key',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "ITI500"
  ITI500Clock = new util.Clock();
  fix500 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fix500', 
    vertices: 'cross', size:[0.02, 0.02],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "phase2_recallattempt"
  phase2_recallattemptClock = new util.Clock();
  recall_prompt = new visual.TextStim({
    win: psychoJS.window,
    name: 'recall_prompt',
    text: 'What is their name?',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, 0.45], height: 0.1,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  FOKtestface = new visual.ImageStim({
    win : psychoJS.window,
    name : 'FOKtestface', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, (- 0.15)], size : [0.88, 0.68],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  recall_info = new visual.TextStim({
    win: psychoJS.window,
    name: 'recall_info',
    text: 'Press Enter when done, or if you cannot recall.',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, 0.35], height: 0.08,  wrapWidth: 1.7, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, 0.25], height: 0.1,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  displayText = new visual.TextStim({
    win: psychoJS.window,
    name: 'displayText',
    text: '',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -5.0 
  });
  
  copyText = new visual.TextStim({
    win: psychoJS.window,
    name: 'copyText',
    text: '',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, 0.2], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -6.0 
  });
  
  // Initialize components for Routine "phase2_FOK"
  phase2_FOKClock = new util.Clock();
  FOK_prompt = new visual.TextStim({
    win: psychoJS.window,
    name: 'FOK_prompt',
    text: 'How likely is it you could recognize their name?\n',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, 0.2], height: 0.1,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  FOK_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  FOK_scale = new visual.TextStim({
    win: psychoJS.window,
    name: 'FOK_scale',
    text: '1 = trials where recognition is least likely\n5 = trials where recognition is most likely',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.08,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "ITI500"
  ITI500Clock = new util.Clock();
  fix500 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fix500', 
    vertices: 'cross', size:[0.02, 0.02],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "phase_finish"
  phase_finishClock = new util.Clock();
  phase_finishtext = new visual.TextStim({
    win: psychoJS.window,
    name: 'phase_finishtext',
    text: 'Phase Finished!\n\nPress Space To Continue Experiment',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  finish_cont = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "phase3_instructions"
  phase3_instructionsClock = new util.Clock();
  restudy_instruct = new visual.TextStim({
    win: psychoJS.window,
    name: 'restudy_instruct',
    text: 'This is the end of the memory tests for this experiment. At this stage we are interested in determining which name you are most curious about. You will get the chance to select to see the name for up to half (39) of the faces we will show you.\nYou will move through each face and will say either "Yes I wish to see their name", using the "Right Arrow", in which case the face and name will appear together again or "No I do not want to", using the "Left Arrow", moving you right to the next face.\nFor faces for which you choose to see the associated name, you will be asked to provide a rating, from 1 to 5, about how satisfying it was to see the face and name together again. Please distribute your responses across the entire 1 to 5 scale.\nA countdown with how many "Yes choices" you have remaining will be in the bottom right corner, and you will get a break halfway through.\nRandomly throughout the phase you may see a blue square on the screen. When you see this square please press "0" as quickly as you can.\n\nPress Space to Begin',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, 0], height: 0.045,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  phase3_cont = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ITI500"
  ITI500Clock = new util.Clock();
  fix500 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fix500', 
    vertices: 'cross', size:[0.02, 0.02],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "restudy_code"
  restudy_codeClock = new util.Clock();
  restudy_order = [];
  for (var i = 0; i < numstudy; i++) {
      restudy_order.push(i);
  }
  
  restudies = 0;
  
  shuffle(restudy_order);
  restudy_trial = 0;
  
  restudycatch = [];
  for (var i = 0; i < (numtrial/2); i++) {
      restudycatch.push(i);
  }
  
  shuffle(restudycatch);
  
  restudycatch1 = restudycatch[0];
  
  if (restudycatch1 === 0 || restudycatch1 === ((numtrial/2)-1)) {
      restudycatch1 = restudycatch[1]
  }
  
  if (restudycatch1 === 0 || restudycatch1 === ((numtrial/2)-1)) {
      restudycatch1 = restudycatch[2]
  }
  
  shuffle(restudycatch);
  
  restudycatch2 = restudycatch[0] 
  
  if (restudycatch2 === 0 || restudycatch2 === ((numtrial/2)-1)) {
      restudycatch2 = restudycatch[1]
  }
  
  if (restudycatch1 === 0 || restudycatch1 === ((numtrial/2)-1)) {
      restudycatch1 = restudycatch[2]
  }
  
  restudycatch2 = restudycatch2 + (numtrial/2);
  
  
  
  // Initialize components for Routine "catch_trial"
  catch_trialClock = new util.Clock();
  catch_cue = new visual.Rect ({
    win: psychoJS.window, name: 'catch_cue', 
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0, pos: [0, (- 0.12)],
    lineWidth: 1, lineColor: new util.Color([(- 0.5), (- 0.85), 0.7]),
    fillColor: new util.Color([(- 0.5), (- 0.85), 0.7]),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  key_catch = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  catch_prompt = new visual.TextStim({
    win: psychoJS.window,
    name: 'catch_prompt',
    text: 'Please Press The "0" Key',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "ITI500"
  ITI500Clock = new util.Clock();
  fix500 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fix500', 
    vertices: 'cross', size:[0.02, 0.02],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "phase2_instructreminder1"
  phase2_instructreminder1Clock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'You are halfway through. You are doing great! Please keep using the entire scale. \n\nPress Space to Continue',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ITI500"
  ITI500Clock = new util.Clock();
  fix500 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fix500', 
    vertices: 'cross', size:[0.02, 0.02],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "phase3_restudychoice"
  phase3_restudychoiceClock = new util.Clock();
  restudyprompt = new visual.TextStim({
    win: psychoJS.window,
    name: 'restudyprompt',
    text: 'Would you like to see their name again?',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, 0.38], height: 0.1,  wrapWidth: 1.7, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  restudy_scale = new visual.TextStim({
    win: psychoJS.window,
    name: 'restudy_scale',
    text: 'Left Arrow = No, Right Arrow = Yes',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, 0.23], height: 0.08,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  option_face = new visual.ImageStim({
    win : psychoJS.window,
    name : 'option_face', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, (- 0.15)], size : [0.8, 0.6],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  key_restudychoice = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  countdown_prompt = new visual.TextStim({
    win: psychoJS.window,
    name: 'countdown_prompt',
    text: '"Yes" Choices Left:',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0.6, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -5.0 
  });
  
  countdown = new visual.TextStim({
    win: psychoJS.window,
    name: 'countdown',
    text: 'default text',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0.84, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -6.0 
  });
  
  // Initialize components for Routine "phase3_encode"
  phase3_encodeClock = new util.Clock();
  restudyname = new visual.TextStim({
    win: psychoJS.window,
    name: 'restudyname',
    text: 'default text',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.15,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  restudyface = new visual.ImageStim({
    win : psychoJS.window,
    name : 'restudyface', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0.08], size : [1, 0.8],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "satisfaction"
  satisfactionClock = new util.Clock();
  satisfaction_prompt = new visual.TextStim({
    win: psychoJS.window,
    name: 'satisfaction_prompt',
    text: 'How satisfied were you when you saw the face and name together?',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, 0.2], height: 0.1,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  satisfaction_rating = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  satisfaction_scale = new visual.TextStim({
    win: psychoJS.window,
    name: 'satisfaction_scale',
    text: '1 = trials that were least satisfying\n5 = trials that were most satisfying',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.08,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "ITI500"
  ITI500Clock = new util.Clock();
  fix500 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fix500', 
    vertices: 'cross', size:[0.02, 0.02],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "phase_finish"
  phase_finishClock = new util.Clock();
  phase_finishtext = new visual.TextStim({
    win: psychoJS.window,
    name: 'phase_finishtext',
    text: 'Phase Finished!\n\nPress Space To Continue Experiment',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  finish_cont = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "FOKexp_exit"
  FOKexp_exitClock = new util.Clock();
  FOK_cont_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'FOK_cont_text',
    text: 'Experiment Complete!\n\nThank you for participating in this study. \nPlease return to the Qualtrics page and enter this number into the box asking for it so we can verify that you completed the experiment.\n\n1111\n\nPress Space To Exit!',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, 0], height: 0.08,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  FOK_cont_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var bfemalefaces;
var wfemalefaces;
var femalenames;
var bmalefaces;
var wmalefaces;
var malenames;
var face_files;
var fullnames;
var old_new;
var novelnames;
var i;
var g;
var h;
var j;
var k;
var l;
var m;
var femalelurenames;
var malelurenames;
var prep_codeComponents;
function prep_codeRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'prep_code'-------
    t = 0;
    prep_codeClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    bfemalefaces = [];
    wfemalefaces = [];
    femalenames = [];
    bmalefaces = [];
    wmalefaces = [];
    malenames = [];
    row = [];
    for (var rowx = 0, _pj_a = numtrial; (rowx < _pj_a); rowx += 1) {
        row = insheet[rowx];
        const {Filepaths: face} = row; 
        if ((rowx < numbffaces)) {
            bfemalefaces.push(face);
        } else {
            if (((numbffaces <= rowx) && (rowx < numfemalefaces))) {
                wfemalefaces.push(face);
            } else {
                if (((numfemalefaces <= rowx) && (rowx < (numfemalefaces + numbmfaces)))) {
                    bmalefaces.push(face);
                } else {
                    if ((((numfemalefaces + numbmfaces) <= rowx) && (rowx < numfaces))) {
                        wmalefaces.push(face);
                    }
                }
            }
        }
    }
    
    row = [];
    for (var rowx = 0, _pj_a = numnames; (rowx < _pj_a); rowx += 1) {
        row = insheet[rowx];
        const {Names: name} =  row;
        if ((rowx < numfemalenames)) {
            femalenames.push(name);
        } else {
            if ((rowx >= numfemalenames)) {
                malenames.push(name);
            }
        }
    }
    shuffle(bfemalefaces);
    shuffle(wfemalefaces);
    shuffle(bmalefaces);
    shuffle(wmalefaces);
    shuffle(femalenames);
    shuffle(malenames);
    
    face_files = [];
    fullnames = [];
    old_new = [];
    novelnames = [];
    i = 0;
    g = 0;
    h = 0;
    j = 0;
    k = 0;
    l = 0;
    m = 0;
    for (var i = 0, _pj_a = numnames; (i < _pj_a); i += 1) {
        if ((i < numstudybf)) {
            face_files.push(bfemalefaces[j]);
            fullnames.push(femalenames[g]);
            g = (g + 1);
            j = (j + 1);
        } else {
            if (((numstudybf <= i) && (i < numstudyfemale))) {
                face_files.push(wfemalefaces[l]);
                fullnames.push(femalenames[g]);
                g = (g + 1);
                l = (l + 1);
            } else {
                if (((numstudyfemale <= i) && (i < (numstudyfemale + numstudybm)))) {
                    face_files.push(bmalefaces[k]);
                    fullnames.push(malenames[h]);
                    k = (k + 1);
                    h = (h + 1);
                } else {
                    if ((((numstudyfemale + numstudybm) <= i) && (i < numstudy))) {
                        face_files.push(wmalefaces[m]);
                        fullnames.push(malenames[h]);
                        m = (m + 1);
                        h = (h + 1);
                        } else {
                            if (((numtrial <= i) && (i < (numtrial + numstudyfemale)))) {
                                novelnames.push(femalenames[g]);
                                g = (g + 1);
                                } else {
                                    if ((((numtrial + numstudyfemale) <= i) && (i < (numtrial + numstudy)))) {
                                        novelnames.push(malenames[h]);
                                        h = (h + 1);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
    
    
    femalelurenames = [];
    malelurenames = [];
    for (var i = 0, _pj_a = numstudy; (i < _pj_a); i += 1) {
        if ((i < numstudyfemale)) {
            femalelurenames.push(fullnames[i]);
        } else {
            if (((numstudyfemale <= i) && (i < numstudy))) {
                malelurenames.push(fullnames[i]);
            }
        }
    }
    
    // keep track of which components have finished
    prep_codeComponents = [];
    
    for (const thisComponent of prep_codeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function prep_codeRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'prep_code'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = prep_codeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of prep_codeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function prep_codeRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'prep_code'-------
    for (const thisComponent of prep_codeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "prep_code" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var encodeface;
var dummyfaceencode;
var dummynameencode;
var dummy_codeComponents;
function dummy_codeRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'dummy_code'-------
    t = 0;
    dummy_codeClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    encodeface = [];
    for (var i = 0; i < numdummy; i++) {
        encodeface.push(i);
    }
    shuffle(encodeface);
    
    dummyfaceencode = dummyface[encodeface[0]];
    dummynameencode = dummyname[encodeface[0]];
    
    // keep track of which components have finished
    dummy_codeComponents = [];
    
    for (const thisComponent of dummy_codeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function dummy_codeRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'dummy_code'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = dummy_codeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of dummy_codeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function dummy_codeRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'dummy_code'-------
    for (const thisComponent of dummy_codeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "dummy_code" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _exp_continue_allKeys;
var exp_start;
var date;
var exp_begin;
var experiment_instructionsComponents;
function experiment_instructionsRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'experiment_instructions'-------
    t = 0;
    experiment_instructionsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    exp_continue.keys = undefined;
    exp_continue.rt = undefined;
    _exp_continue_allKeys = [];
    exp_start = t;
    
    date = new Date();
    exp_begin = date.getTime();
    
    document.body.style.cursor='none';
    
    // keep track of which components have finished
    experiment_instructionsComponents = [];
    experiment_instructionsComponents.push(exp_instruct);
    experiment_instructionsComponents.push(exp_continue);
    
    for (const thisComponent of experiment_instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function experiment_instructionsRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'experiment_instructions'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = experiment_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *exp_instruct* updates
    if (t >= 0.0 && exp_instruct.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp_instruct.tStart = t;  // (not accounting for frame time here)
      exp_instruct.frameNStart = frameN;  // exact frame index
      
      exp_instruct.setAutoDraw(true);
    }

    
    // *exp_continue* updates
    if (t >= 0.0 && exp_continue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp_continue.tStart = t;  // (not accounting for frame time here)
      exp_continue.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { exp_continue.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { exp_continue.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { exp_continue.clearEvents(); });
    }

    if (exp_continue.status === PsychoJS.Status.STARTED) {
      let theseKeys = exp_continue.getKeys({keyList: ['space'], waitRelease: false});
      _exp_continue_allKeys = _exp_continue_allKeys.concat(theseKeys);
      if (_exp_continue_allKeys.length > 0) {
        exp_continue.keys = _exp_continue_allKeys[_exp_continue_allKeys.length - 1].name;  // just the last key pressed
        exp_continue.rt = _exp_continue_allKeys[_exp_continue_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of experiment_instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var start_instruct_end;
var start_duration;
function experiment_instructionsRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'experiment_instructions'-------
    for (const thisComponent of experiment_instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    start_instruct_end = experiment_instructionsClock.getTime();
    
    start_duration = start_instruct_end - exp_start;
    // the Routine "experiment_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var ITI500Components;
function ITI500RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'ITI500'-------
    t = 0;
    ITI500Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    ITI500Components = [];
    ITI500Components.push(fix500);
    
    for (const thisComponent of ITI500Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function ITI500RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'ITI500'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = ITI500Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix500* updates
    if (t >= 0.0 && fix500.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix500.tStart = t;  // (not accounting for frame time here)
      fix500.frameNStart = frameN;  // exact frame index
      
      fix500.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix500.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix500.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ITI500Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ITI500RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'ITI500'-------
    for (const thisComponent of ITI500Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _phase1_cont_allKeys;
var phase1_instruct_start;
var phase1_instructionsComponents;
function phase1_instructionsRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'phase1_instructions'-------
    t = 0;
    phase1_instructionsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    phase1_cont.keys = undefined;
    phase1_cont.rt = undefined;
    _phase1_cont_allKeys = [];
    phase1_instruct_start = t;
    // keep track of which components have finished
    phase1_instructionsComponents = [];
    phase1_instructionsComponents.push(encode_instruct);
    phase1_instructionsComponents.push(phase1_cont);
    
    for (const thisComponent of phase1_instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function phase1_instructionsRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'phase1_instructions'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = phase1_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *encode_instruct* updates
    if (t >= 0.0 && encode_instruct.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      encode_instruct.tStart = t;  // (not accounting for frame time here)
      encode_instruct.frameNStart = frameN;  // exact frame index
      
      encode_instruct.setAutoDraw(true);
    }

    
    // *phase1_cont* updates
    if (t >= 0.0 && phase1_cont.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      phase1_cont.tStart = t;  // (not accounting for frame time here)
      phase1_cont.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { phase1_cont.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { phase1_cont.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { phase1_cont.clearEvents(); });
    }

    if (phase1_cont.status === PsychoJS.Status.STARTED) {
      let theseKeys = phase1_cont.getKeys({keyList: ['space'], waitRelease: false});
      _phase1_cont_allKeys = _phase1_cont_allKeys.concat(theseKeys);
      if (_phase1_cont_allKeys.length > 0) {
        phase1_cont.keys = _phase1_cont_allKeys[_phase1_cont_allKeys.length - 1].name;  // just the last key pressed
        phase1_cont.rt = _phase1_cont_allKeys[_phase1_cont_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of phase1_instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var phase1_instruct_end;
var phase1_instruct_duration;
function phase1_instructionsRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'phase1_instructions'-------
    for (const thisComponent of phase1_instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    phase1_instruct_end = phase1_instructionsClock.getTime();
    
    phase1_instruct_duration = phase1_instruct_end - phase1_instruct_start;
    
    psychoJS.experiment.addData("Phase1InstructionsLength", phase1_instruct_duration);
    
    // the Routine "phase1_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Dummy_encodeComponents;
function Dummy_encodeRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Dummy_encode'-------
    t = 0;
    Dummy_encodeClock.reset(); // clock
    frameN = -1;
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    Dummy_name.setText(dummynameencode);
    dummy_image.setImage(dummyfaceencode);
    // keep track of which components have finished
    Dummy_encodeComponents = [];
    Dummy_encodeComponents.push(Dummy_name);
    Dummy_encodeComponents.push(dummy_image);
    
    for (const thisComponent of Dummy_encodeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Dummy_encodeRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Dummy_encode'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Dummy_encodeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Dummy_name* updates
    if (t >= 0.0 && Dummy_name.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Dummy_name.tStart = t;  // (not accounting for frame time here)
      Dummy_name.frameNStart = frameN;  // exact frame index
      
      Dummy_name.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Dummy_name.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Dummy_name.setAutoDraw(false);
    }
    
    // *dummy_image* updates
    if (t >= 0.0 && dummy_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dummy_image.tStart = t;  // (not accounting for frame time here)
      dummy_image.frameNStart = frameN;  // exact frame index
      
      dummy_image.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (dummy_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      dummy_image.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Dummy_encodeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Dummy_encodeRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Dummy_encode'-------
    for (const thisComponent of Dummy_encodeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var memorize_loop;
var currentLoop;
function memorize_loopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  memorize_loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: numstudy, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'memorize_loop'
  });
  psychoJS.experiment.addLoop(memorize_loop); // add the loop to the experiment
  currentLoop = memorize_loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisMemorize_loop of memorize_loop) {
    const snapshot = memorize_loop.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(memorize_codeRoutineBegin(snapshot));
    thisScheduler.add(memorize_codeRoutineEachFrame(snapshot));
    thisScheduler.add(memorize_codeRoutineEnd(snapshot));
    const RestLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(RestLoopBegin, RestLoopScheduler);
    thisScheduler.add(RestLoopScheduler);
    thisScheduler.add(RestLoopEnd);
    thisScheduler.add(phase1_encodeRoutineBegin(snapshot));
    thisScheduler.add(phase1_encodeRoutineEachFrame(snapshot));
    thisScheduler.add(phase1_encodeRoutineEnd(snapshot));
    thisScheduler.add(ITI500RoutineBegin(snapshot));
    thisScheduler.add(ITI500RoutineEachFrame(snapshot));
    thisScheduler.add(ITI500RoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var Rest;
function RestLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  Rest = new TrialHandler({
    psychoJS: psychoJS,
    nReps: doRest, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'Rest'
  });
  psychoJS.experiment.addLoop(Rest); // add the loop to the experiment
  currentLoop = Rest;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisRest of Rest) {
    const snapshot = Rest.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(restbreakRoutineBegin(snapshot));
    thisScheduler.add(restbreakRoutineEachFrame(snapshot));
    thisScheduler.add(restbreakRoutineEnd(snapshot));
    thisScheduler.add(ITI500RoutineBegin(snapshot));
    thisScheduler.add(ITI500RoutineEachFrame(snapshot));
    thisScheduler.add(ITI500RoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function RestLoopEnd() {
  psychoJS.experiment.removeLoop(Rest);

  return Scheduler.Event.NEXT;
}


function memorize_loopLoopEnd() {
  psychoJS.experiment.removeLoop(memorize_loop);

  return Scheduler.Event.NEXT;
}


var FOKdummyloop;
function FOKdummyloopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  FOKdummyloop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: numdummy, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'FOKdummyloop'
  });
  psychoJS.experiment.addLoop(FOKdummyloop); // add the loop to the experiment
  currentLoop = FOKdummyloop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisFOKdummyloop of FOKdummyloop) {
    const snapshot = FOKdummyloop.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(dummyFOK_codeRoutineBegin(snapshot));
    thisScheduler.add(dummyFOK_codeRoutineEachFrame(snapshot));
    thisScheduler.add(dummyFOK_codeRoutineEnd(snapshot));
    thisScheduler.add(Dummy_recallRoutineBegin(snapshot));
    thisScheduler.add(Dummy_recallRoutineEachFrame(snapshot));
    thisScheduler.add(Dummy_recallRoutineEnd(snapshot));
    thisScheduler.add(Dummy_FOKRoutineBegin(snapshot));
    thisScheduler.add(Dummy_FOKRoutineEachFrame(snapshot));
    thisScheduler.add(Dummy_FOKRoutineEnd(snapshot));
    thisScheduler.add(ITI500RoutineBegin(snapshot));
    thisScheduler.add(ITI500RoutineEachFrame(snapshot));
    thisScheduler.add(ITI500RoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function FOKdummyloopLoopEnd() {
  psychoJS.experiment.removeLoop(FOKdummyloop);

  return Scheduler.Event.NEXT;
}


var judgement_loop;
function judgement_loopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  judgement_loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: numtrial, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'judgement_loop'
  });
  psychoJS.experiment.addLoop(judgement_loop); // add the loop to the experiment
  currentLoop = judgement_loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisJudgement_loop of judgement_loop) {
    const snapshot = judgement_loop.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(judgement_codeRoutineBegin(snapshot));
    thisScheduler.add(judgement_codeRoutineEachFrame(snapshot));
    thisScheduler.add(judgement_codeRoutineEnd(snapshot));
    const breakloopLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(breakloopLoopBegin, breakloopLoopScheduler);
    thisScheduler.add(breakloopLoopScheduler);
    thisScheduler.add(breakloopLoopEnd);
    const catch_loopLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(catch_loopLoopBegin, catch_loopLoopScheduler);
    thisScheduler.add(catch_loopLoopScheduler);
    thisScheduler.add(catch_loopLoopEnd);
    thisScheduler.add(phase2_recallattemptRoutineBegin(snapshot));
    thisScheduler.add(phase2_recallattemptRoutineEachFrame(snapshot));
    thisScheduler.add(phase2_recallattemptRoutineEnd(snapshot));
    thisScheduler.add(phase2_FOKRoutineBegin(snapshot));
    thisScheduler.add(phase2_FOKRoutineEachFrame(snapshot));
    thisScheduler.add(phase2_FOKRoutineEnd(snapshot));
    thisScheduler.add(ITI500RoutineBegin(snapshot));
    thisScheduler.add(ITI500RoutineEachFrame(snapshot));
    thisScheduler.add(ITI500RoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var breakloop;
function breakloopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  breakloop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: doBreak, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'breakloop'
  });
  psychoJS.experiment.addLoop(breakloop); // add the loop to the experiment
  currentLoop = breakloop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisBreakloop of breakloop) {
    const snapshot = breakloop.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(phase2_instructreminder1RoutineBegin(snapshot));
    thisScheduler.add(phase2_instructreminder1RoutineEachFrame(snapshot));
    thisScheduler.add(phase2_instructreminder1RoutineEnd(snapshot));
    thisScheduler.add(ITI500RoutineBegin(snapshot));
    thisScheduler.add(ITI500RoutineEachFrame(snapshot));
    thisScheduler.add(ITI500RoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function breakloopLoopEnd() {
  psychoJS.experiment.removeLoop(breakloop);

  return Scheduler.Event.NEXT;
}


var catch_loop;
function catch_loopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  catch_loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: doCatch, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'catch_loop'
  });
  psychoJS.experiment.addLoop(catch_loop); // add the loop to the experiment
  currentLoop = catch_loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisCatch_loop of catch_loop) {
    const snapshot = catch_loop.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(catch_trialRoutineBegin(snapshot));
    thisScheduler.add(catch_trialRoutineEachFrame(snapshot));
    thisScheduler.add(catch_trialRoutineEnd(snapshot));
    thisScheduler.add(ITI500RoutineBegin(snapshot));
    thisScheduler.add(ITI500RoutineEachFrame(snapshot));
    thisScheduler.add(ITI500RoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function catch_loopLoopEnd() {
  psychoJS.experiment.removeLoop(catch_loop);

  return Scheduler.Event.NEXT;
}


function judgement_loopLoopEnd() {
  psychoJS.experiment.removeLoop(judgement_loop);

  return Scheduler.Event.NEXT;
}


var restudytrial_loop;
function restudytrial_loopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  restudytrial_loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: numtrial, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'restudytrial_loop'
  });
  psychoJS.experiment.addLoop(restudytrial_loop); // add the loop to the experiment
  currentLoop = restudytrial_loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisRestudytrial_loop of restudytrial_loop) {
    const snapshot = restudytrial_loop.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(restudy_codeRoutineBegin(snapshot));
    thisScheduler.add(restudy_codeRoutineEachFrame(snapshot));
    thisScheduler.add(restudy_codeRoutineEnd(snapshot));
    const catch2_loopLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(catch2_loopLoopBegin, catch2_loopLoopScheduler);
    thisScheduler.add(catch2_loopLoopScheduler);
    thisScheduler.add(catch2_loopLoopEnd);
    const restloopLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(restloopLoopBegin, restloopLoopScheduler);
    thisScheduler.add(restloopLoopScheduler);
    thisScheduler.add(restloopLoopEnd);
    thisScheduler.add(phase3_restudychoiceRoutineBegin(snapshot));
    thisScheduler.add(phase3_restudychoiceRoutineEachFrame(snapshot));
    thisScheduler.add(phase3_restudychoiceRoutineEnd(snapshot));
    const restudy_loopLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(restudy_loopLoopBegin, restudy_loopLoopScheduler);
    thisScheduler.add(restudy_loopLoopScheduler);
    thisScheduler.add(restudy_loopLoopEnd);
    thisScheduler.add(ITI500RoutineBegin(snapshot));
    thisScheduler.add(ITI500RoutineEachFrame(snapshot));
    thisScheduler.add(ITI500RoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var catch2_loop;
function catch2_loopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  catch2_loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: doCatch, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'catch2_loop'
  });
  psychoJS.experiment.addLoop(catch2_loop); // add the loop to the experiment
  currentLoop = catch2_loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisCatch2_loop of catch2_loop) {
    const snapshot = catch2_loop.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(catch_trialRoutineBegin(snapshot));
    thisScheduler.add(catch_trialRoutineEachFrame(snapshot));
    thisScheduler.add(catch_trialRoutineEnd(snapshot));
    thisScheduler.add(ITI500RoutineBegin(snapshot));
    thisScheduler.add(ITI500RoutineEachFrame(snapshot));
    thisScheduler.add(ITI500RoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function catch2_loopLoopEnd() {
  psychoJS.experiment.removeLoop(catch2_loop);

  return Scheduler.Event.NEXT;
}


var restloop;
function restloopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  restloop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: doRest, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'restloop'
  });
  psychoJS.experiment.addLoop(restloop); // add the loop to the experiment
  currentLoop = restloop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisRestloop of restloop) {
    const snapshot = restloop.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(phase2_instructreminder1RoutineBegin(snapshot));
    thisScheduler.add(phase2_instructreminder1RoutineEachFrame(snapshot));
    thisScheduler.add(phase2_instructreminder1RoutineEnd(snapshot));
    thisScheduler.add(ITI500RoutineBegin(snapshot));
    thisScheduler.add(ITI500RoutineEachFrame(snapshot));
    thisScheduler.add(ITI500RoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function restloopLoopEnd() {
  psychoJS.experiment.removeLoop(restloop);

  return Scheduler.Event.NEXT;
}


var restudy_loop;
function restudy_loopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  restudy_loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: doRestudy, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'restudy_loop'
  });
  psychoJS.experiment.addLoop(restudy_loop); // add the loop to the experiment
  currentLoop = restudy_loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisRestudy_loop of restudy_loop) {
    const snapshot = restudy_loop.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(phase3_encodeRoutineBegin(snapshot));
    thisScheduler.add(phase3_encodeRoutineEachFrame(snapshot));
    thisScheduler.add(phase3_encodeRoutineEnd(snapshot));
    thisScheduler.add(satisfactionRoutineBegin(snapshot));
    thisScheduler.add(satisfactionRoutineEachFrame(snapshot));
    thisScheduler.add(satisfactionRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function restudy_loopLoopEnd() {
  psychoJS.experiment.removeLoop(restudy_loop);

  return Scheduler.Event.NEXT;
}


function restudytrial_loopLoopEnd() {
  psychoJS.experiment.removeLoop(restudytrial_loop);

  return Scheduler.Event.NEXT;
}


var FaceFile;
var FullName;
var doRest;
var memorize_codeComponents;
function memorize_codeRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'memorize_code'-------
    t = 0;
    memorize_codeClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    FaceFile = face_files[study_order[study_trial]];
    FullName = fullnames[study_order[study_trial]];
    
    if (study_trial === resttrial) {
        doRest = 1;
    } else {
        doRest = 0;
        }
    
    psychoJS.experiment.addData("Face", FaceFile);
    psychoJS.experiment.addData("Name", FullName);
    psychoJS.experiment.addData("ItemID", study_order[study_trial]);
    psychoJS.experiment.addData("StudyTrial", study_trial);
    
    study_trial = (study_trial + 1);
    // keep track of which components have finished
    memorize_codeComponents = [];
    
    for (const thisComponent of memorize_codeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function memorize_codeRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'memorize_code'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = memorize_codeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of memorize_codeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function memorize_codeRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'memorize_code'-------
    for (const thisComponent of memorize_codeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "memorize_code" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _rest_cont_allKeys;
var restbreakComponents;
function restbreakRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'restbreak'-------
    t = 0;
    restbreakClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    rest_cont.keys = undefined;
    rest_cont.rt = undefined;
    _rest_cont_allKeys = [];
    // keep track of which components have finished
    restbreakComponents = [];
    restbreakComponents.push(rest_text);
    restbreakComponents.push(rest_cont);
    restbreakComponents.push(restText2);
    
    for (const thisComponent of restbreakComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function restbreakRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'restbreak'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = restbreakClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *rest_text* updates
    if (t >= 0.0 && rest_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rest_text.tStart = t;  // (not accounting for frame time here)
      rest_text.frameNStart = frameN;  // exact frame index
      
      rest_text.setAutoDraw(true);
    }

    
    // *rest_cont* updates
    if (t >= 0.0 && rest_cont.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rest_cont.tStart = t;  // (not accounting for frame time here)
      rest_cont.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { rest_cont.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { rest_cont.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { rest_cont.clearEvents(); });
    }

    if (rest_cont.status === PsychoJS.Status.STARTED) {
      let theseKeys = rest_cont.getKeys({keyList: ['space'], waitRelease: false});
      _rest_cont_allKeys = _rest_cont_allKeys.concat(theseKeys);
      if (_rest_cont_allKeys.length > 0) {
        rest_cont.keys = _rest_cont_allKeys[_rest_cont_allKeys.length - 1].name;  // just the last key pressed
        rest_cont.rt = _rest_cont_allKeys[_rest_cont_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *restText2* updates
    if (t >= 0.0 && restText2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      restText2.tStart = t;  // (not accounting for frame time here)
      restText2.frameNStart = frameN;  // exact frame index
      
      restText2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of restbreakComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function restbreakRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'restbreak'-------
    for (const thisComponent of restbreakComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('rest_cont.keys', rest_cont.keys);
    if (typeof rest_cont.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('rest_cont.rt', rest_cont.rt);
        routineTimer.reset();
        }
    
    rest_cont.stop();
    // the Routine "restbreak" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var phase1_encodeComponents;
function phase1_encodeRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'phase1_encode'-------
    t = 0;
    phase1_encodeClock.reset(); // clock
    frameN = -1;
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    encode_name.setText(FullName);
    encode_face.setImage(FaceFile);
    // keep track of which components have finished
    phase1_encodeComponents = [];
    phase1_encodeComponents.push(encode_name);
    phase1_encodeComponents.push(encode_face);
    
    for (const thisComponent of phase1_encodeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function phase1_encodeRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'phase1_encode'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = phase1_encodeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *encode_name* updates
    if (t >= 0.0 && encode_name.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      encode_name.tStart = t;  // (not accounting for frame time here)
      encode_name.frameNStart = frameN;  // exact frame index
      
      encode_name.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (encode_name.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      encode_name.setAutoDraw(false);
    }
    
    // *encode_face* updates
    if (t >= 0.0 && encode_face.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      encode_face.tStart = t;  // (not accounting for frame time here)
      encode_face.frameNStart = frameN;  // exact frame index
      
      encode_face.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (encode_face.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      encode_face.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of phase1_encodeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function phase1_encodeRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'phase1_encode'-------
    for (const thisComponent of phase1_encodeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _finish_cont_allKeys;
var break_start;
var phase_finishComponents;
function phase_finishRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'phase_finish'-------
    t = 0;
    phase_finishClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    finish_cont.keys = undefined;
    finish_cont.rt = undefined;
    _finish_cont_allKeys = [];
    break_start = t;
    
    // keep track of which components have finished
    phase_finishComponents = [];
    phase_finishComponents.push(phase_finishtext);
    phase_finishComponents.push(finish_cont);
    
    for (const thisComponent of phase_finishComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function phase_finishRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'phase_finish'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = phase_finishClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *phase_finishtext* updates
    if (t >= 0.0 && phase_finishtext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      phase_finishtext.tStart = t;  // (not accounting for frame time here)
      phase_finishtext.frameNStart = frameN;  // exact frame index
      
      phase_finishtext.setAutoDraw(true);
    }

    
    // *finish_cont* updates
    if (t >= 0.0 && finish_cont.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      finish_cont.tStart = t;  // (not accounting for frame time here)
      finish_cont.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { finish_cont.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { finish_cont.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { finish_cont.clearEvents(); });
    }

    if (finish_cont.status === PsychoJS.Status.STARTED) {
      let theseKeys = finish_cont.getKeys({keyList: ['space'], waitRelease: false});
      _finish_cont_allKeys = _finish_cont_allKeys.concat(theseKeys);
      if (_finish_cont_allKeys.length > 0) {
        finish_cont.keys = _finish_cont_allKeys[_finish_cont_allKeys.length - 1].name;  // just the last key pressed
        finish_cont.rt = _finish_cont_allKeys[_finish_cont_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of phase_finishComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var break_end;
var break_duration;
function phase_finishRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'phase_finish'-------
    for (const thisComponent of phase_finishComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    break_end = phase_finishClock.getTime();
    
    break_duration = break_end - break_start;
    // the Routine "phase_finish" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _phase2FOKcont_resp_allKeys;
var phase2_instruct_start;
var phase2_FOKinstructionsComponents;
function phase2_FOKinstructionsRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'phase2_FOKinstructions'-------
    t = 0;
    phase2_FOKinstructionsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    phase2FOKcont_resp.keys = undefined;
    phase2FOKcont_resp.rt = undefined;
    _phase2FOKcont_resp_allKeys = [];
    phase2_instruct_start = t;
    
    // keep track of which components have finished
    phase2_FOKinstructionsComponents = [];
    phase2_FOKinstructionsComponents.push(FOKjudgement_instruct);
    phase2_FOKinstructionsComponents.push(phase2FOKcont_resp);
    
    for (const thisComponent of phase2_FOKinstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function phase2_FOKinstructionsRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'phase2_FOKinstructions'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = phase2_FOKinstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *FOKjudgement_instruct* updates
    if (t >= 0.0 && FOKjudgement_instruct.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FOKjudgement_instruct.tStart = t;  // (not accounting for frame time here)
      FOKjudgement_instruct.frameNStart = frameN;  // exact frame index
      
      FOKjudgement_instruct.setAutoDraw(true);
    }

    
    // *phase2FOKcont_resp* updates
    if (t >= 0.0 && phase2FOKcont_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      phase2FOKcont_resp.tStart = t;  // (not accounting for frame time here)
      phase2FOKcont_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { phase2FOKcont_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { phase2FOKcont_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { phase2FOKcont_resp.clearEvents(); });
    }

    if (phase2FOKcont_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = phase2FOKcont_resp.getKeys({keyList: ['space'], waitRelease: false});
      _phase2FOKcont_resp_allKeys = _phase2FOKcont_resp_allKeys.concat(theseKeys);
      if (_phase2FOKcont_resp_allKeys.length > 0) {
        phase2FOKcont_resp.keys = _phase2FOKcont_resp_allKeys[_phase2FOKcont_resp_allKeys.length - 1].name;  // just the last key pressed
        phase2FOKcont_resp.rt = _phase2FOKcont_resp_allKeys[_phase2FOKcont_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of phase2_FOKinstructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var phase2_instruct_end;
var phase2_instruct_duration;
var phase1to2_duration;
function phase2_FOKinstructionsRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'phase2_FOKinstructions'-------
    for (const thisComponent of phase2_FOKinstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    phase2_instruct_end = phase2_FOKinstructionsClock.getTime();
    
    phase2_instruct_duration = phase2_instruct_end - phase2_instruct_start;
    
    phase1to2_duration = phase2_instruct_duration + break_duration;
    
    psychoJS.experiment.addData("BreakDurationBetweenPhase1andPhase2", phase1to2_duration);
    
    // the Routine "phase2_FOKinstructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var dummyfaceFOK;
var dummyFOK_codeComponents;
function dummyFOK_codeRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'dummyFOK_code'-------
    t = 0;
    dummyFOK_codeClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    dummyfaceFOK = dummyface[dummyFOK_order[dummyFOK_trial]];
    FullName = dummyname[dummyFOK_order[dummyFOK_trial]];
    
    psychoJS.experiment.addData("Face", dummyfaceFOK);
    psychoJS.experiment.addData("Name", FullName);
    psychoJS.experiment.addData("ItemID", dummyFOK_order[dummyFOK_trial]);
    psychoJS.experiment.addData("DummyTestTrial", dummyFOK_trial);
    
    
    dummyFOK_trial = (dummyFOK_trial + 1);
    
    // keep track of which components have finished
    dummyFOK_codeComponents = [];
    
    for (const thisComponent of dummyFOK_codeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function dummyFOK_codeRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'dummyFOK_code'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = dummyFOK_codeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of dummyFOK_codeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function dummyFOK_codeRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'dummyFOK_code'-------
    for (const thisComponent of dummyFOK_codeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "dummyFOK_code" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var textFill;
var recalltstart;
var Dummy_recallComponents;
function Dummy_recallRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Dummy_recall'-------
    t = 0;
    Dummy_recallClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    dummy_stim.setImage(dummyfaceFOK);
    text2.text = '';
    textFill = '';
    
    psychoJS.eventManager.clearKeys()
    
    recalltstart = t;
    
    // keep track of which components have finished
    Dummy_recallComponents = [];
    Dummy_recallComponents.push(dummy_stim);
    Dummy_recallComponents.push(dummy_recallprompt);
    Dummy_recallComponents.push(dummy_recall_info);
    Dummy_recallComponents.push(text2);
    
    for (const thisComponent of Dummy_recallComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var textAdd;
function Dummy_recallRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Dummy_recall'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Dummy_recallClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *dummy_stim* updates
    if (t >= 0.0 && dummy_stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dummy_stim.tStart = t;  // (not accounting for frame time here)
      dummy_stim.frameNStart = frameN;  // exact frame index
      
      dummy_stim.setAutoDraw(true);
    }

    
    // *dummy_recallprompt* updates
    if (t >= 0.0 && dummy_recallprompt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dummy_recallprompt.tStart = t;  // (not accounting for frame time here)
      dummy_recallprompt.frameNStart = frameN;  // exact frame index
      
      dummy_recallprompt.setAutoDraw(true);
    }

    
    // *dummy_recall_info* updates
    if (t >= 0.0 && dummy_recall_info.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dummy_recall_info.tStart = t;  // (not accounting for frame time here)
      dummy_recall_info.frameNStart = frameN;  // exact frame index
      
      dummy_recall_info.setAutoDraw(true);
    }

    let theseKeys = psychoJS.eventManager.getKeys();
    if (theseKeys.length > 0) {  // at least one key was pressed
      textAdd = theseKeys[theseKeys.length-1]; 
      }
    
      if (textAdd === 'return') {
          textAdd = '';  // Add nothing
          continueRoutine = false;  // End routine (if that is what you want)
      } else if (textAdd === 'space') {
          textAdd = ' ';  // Add a space
      } else if (textAdd === 'backspace') {
          text2.text = text2.text.slice(0, -1);
          textAdd = undefined;
      } else if (['lshift', 'rshift'].includes(textAdd)) {
          modify = true;
      } else if (textAdd !== undefined) {
          if (modify) {
              text2.text = text2.text + textAdd.toUpperCase();
              modify = false;
          } else {
              text2.text = text2.text + textAdd
          }
          textAdd = undefined;
      }
    
    // *text2* updates
    if (t >= 0.0 && text2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text2.tStart = t;  // (not accounting for frame time here)
      text2.frameNStart = frameN;  // exact frame index
      
      text2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Dummy_recallComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var recalltstop;
var recallrt;
function Dummy_recallRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Dummy_recall'-------
    for (const thisComponent of Dummy_recallComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('RecallAttemptTyped', text2.text);
    
    recalltstop = Dummy_recallClock.getTime();
    
    recallrt = recalltstop - recalltstart;
    // the Routine "Dummy_recall" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var FOKJtstart;
var _dummy_response_allKeys;
var Dummy_FOKComponents;
function Dummy_FOKRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Dummy_FOK'-------
    t = 0;
    Dummy_FOKClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    FOKJtstart = t;
    dummy_response.keys = undefined;
    dummy_response.rt = undefined;
    _dummy_response_allKeys = [];
    // keep track of which components have finished
    Dummy_FOKComponents = [];
    Dummy_FOKComponents.push(dummyFOK_prompt);
    Dummy_FOKComponents.push(dummy_scale);
    Dummy_FOKComponents.push(dummy_response);
    
    for (const thisComponent of Dummy_FOKComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Dummy_FOKRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Dummy_FOK'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Dummy_FOKClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *dummyFOK_prompt* updates
    if (t >= 0.0 && dummyFOK_prompt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dummyFOK_prompt.tStart = t;  // (not accounting for frame time here)
      dummyFOK_prompt.frameNStart = frameN;  // exact frame index
      
      dummyFOK_prompt.setAutoDraw(true);
    }

    
    // *dummy_scale* updates
    if (t >= 0.0 && dummy_scale.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dummy_scale.tStart = t;  // (not accounting for frame time here)
      dummy_scale.frameNStart = frameN;  // exact frame index
      
      dummy_scale.setAutoDraw(true);
    }

    
    // *dummy_response* updates
    if (t >= 0.0 && dummy_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dummy_response.tStart = t;  // (not accounting for frame time here)
      dummy_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { dummy_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { dummy_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { dummy_response.clearEvents(); });
    }

    if (dummy_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = dummy_response.getKeys({keyList: ['1', '2', '3', '4', '5'], waitRelease: false});
      _dummy_response_allKeys = _dummy_response_allKeys.concat(theseKeys);
      if (_dummy_response_allKeys.length > 0) {
        dummy_response.keys = _dummy_response_allKeys[_dummy_response_allKeys.length - 1].name;  // just the last key pressed
        dummy_response.rt = _dummy_response_allKeys[_dummy_response_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Dummy_FOKComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var FOKJtstop;
var FOKrt;
var combrt;
function Dummy_FOKRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Dummy_FOK'-------
    for (const thisComponent of Dummy_FOKComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    FOKJtstop = Dummy_FOKClock.getTime();
    
    FOKrt = FOKJtstop - FOKJtstart;
    
    combrt = FOKrt + recallrt;
    
    psychoJS.experiment.addData("RecallRT", recallrt);
    psychoJS.experiment.addData("FOKRT", FOKrt);
    psychoJS.experiment.addData("CombinedRT", combrt);
    
    
    
    psychoJS.experiment.addData('dummy_response.keys', dummy_response.keys);
    if (typeof dummy_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('dummy_response.rt', dummy_response.rt);
        routineTimer.reset();
        }
    
    dummy_response.stop();
    // the Routine "Dummy_FOK" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var doCatch;
var doBreak;
var modify;
var judgement_codeComponents;
function judgement_codeRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'judgement_code'-------
    t = 0;
    judgement_codeClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    FaceFile = face_files[FOKtest_order[FOKtest_trial]];
    FullName = fullnames[FOKtest_order[FOKtest_trial]];
    
    if (FOKtest_trial === judgementcatch1) {
        doCatch = 1;
    } else {
        if (FOKtest_trial === judgementcatch2) {
            doCatch = 1;
        } else {
            doCatch = 0;
        }
    }
    
    if (FOKtest_trial === numtrial/2) {
        doBreak = 1;
    } else {
        doBreak = 0;
    }
    
    psychoJS.experiment.addData("Face", FaceFile);
    psychoJS.experiment.addData("Name", FullName);
    psychoJS.experiment.addData("ItemID", FOKtest_order[FOKtest_trial]);
    psychoJS.experiment.addData("FOKTestTrial", FOKtest_trial);
    
    
    FOKtest_trial = (FOKtest_trial + 1);
    
    modify = false;
    // keep track of which components have finished
    judgement_codeComponents = [];
    
    for (const thisComponent of judgement_codeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function judgement_codeRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'judgement_code'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = judgement_codeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of judgement_codeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function judgement_codeRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'judgement_code'-------
    for (const thisComponent of judgement_codeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "judgement_code" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var phase2_instructreminder1Components;
function phase2_instructreminder1RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'phase2_instructreminder1'-------
    t = 0;
    phase2_instructreminder1Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    phase2_instructreminder1Components = [];
    phase2_instructreminder1Components.push(text_2);
    phase2_instructreminder1Components.push(key_resp);
    
    for (const thisComponent of phase2_instructreminder1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function phase2_instructreminder1RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'phase2_instructreminder1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = phase2_instructreminder1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of phase2_instructreminder1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function phase2_instructreminder1RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'phase2_instructreminder1'-------
    for (const thisComponent of phase2_instructreminder1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "phase2_instructreminder1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_catch_allKeys;
var catch_trialComponents;
function catch_trialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'catch_trial'-------
    t = 0;
    catch_trialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_catch.keys = undefined;
    key_catch.rt = undefined;
    _key_catch_allKeys = [];
    // keep track of which components have finished
    catch_trialComponents = [];
    catch_trialComponents.push(catch_cue);
    catch_trialComponents.push(key_catch);
    catch_trialComponents.push(catch_prompt);
    
    for (const thisComponent of catch_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function catch_trialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'catch_trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = catch_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *catch_cue* updates
    if (t >= 0.0 && catch_cue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      catch_cue.tStart = t;  // (not accounting for frame time here)
      catch_cue.frameNStart = frameN;  // exact frame index
      
      catch_cue.setAutoDraw(true);
    }

    
    // *key_catch* updates
    if (t >= 0.0 && key_catch.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_catch.tStart = t;  // (not accounting for frame time here)
      key_catch.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_catch.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_catch.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_catch.clearEvents(); });
    }

    if (key_catch.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_catch.getKeys({keyList: ['0'], waitRelease: false});
      _key_catch_allKeys = _key_catch_allKeys.concat(theseKeys);
      if (_key_catch_allKeys.length > 0) {
        key_catch.keys = _key_catch_allKeys.map((key) => key.name);  // storing all keys
        key_catch.rt = _key_catch_allKeys.map((key) => key.rt);
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *catch_prompt* updates
    if (t >= 0.0 && catch_prompt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      catch_prompt.tStart = t;  // (not accounting for frame time here)
      catch_prompt.frameNStart = frameN;  // exact frame index
      
      catch_prompt.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of catch_trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function catch_trialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'catch_trial'-------
    for (const thisComponent of catch_trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_catch.keys', key_catch.keys);
    if (typeof key_catch.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_catch.rt', key_catch.rt);
        routineTimer.reset();
        }
    
    key_catch.stop();
    // the Routine "catch_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var phase2_recallattemptComponents;
function phase2_recallattemptRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'phase2_recallattempt'-------
    t = 0;
    phase2_recallattemptClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    FOKtestface.setImage(FaceFile);
    text.text = '';
    textFill = '';
    
    psychoJS.eventManager.clearKeys()
    
    recalltstart = t;
    
    
    // keep track of which components have finished
    phase2_recallattemptComponents = [];
    phase2_recallattemptComponents.push(recall_prompt);
    phase2_recallattemptComponents.push(FOKtestface);
    phase2_recallattemptComponents.push(recall_info);
    phase2_recallattemptComponents.push(text);
    phase2_recallattemptComponents.push(displayText);
    phase2_recallattemptComponents.push(copyText);
    
    for (const thisComponent of phase2_recallattemptComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function phase2_recallattemptRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'phase2_recallattempt'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = phase2_recallattemptClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *recall_prompt* updates
    if (t >= 0.0 && recall_prompt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_prompt.tStart = t;  // (not accounting for frame time here)
      recall_prompt.frameNStart = frameN;  // exact frame index
      
      recall_prompt.setAutoDraw(true);
    }

    
    // *FOKtestface* updates
    if (t >= 0.0 && FOKtestface.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FOKtestface.tStart = t;  // (not accounting for frame time here)
      FOKtestface.frameNStart = frameN;  // exact frame index
      
      FOKtestface.setAutoDraw(true);
    }

    
    // *recall_info* updates
    if (t >= 0.0 && recall_info.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_info.tStart = t;  // (not accounting for frame time here)
      recall_info.frameNStart = frameN;  // exact frame index
      
      recall_info.setAutoDraw(true);
    }

    let theseKeys = psychoJS.eventManager.getKeys();
    if (theseKeys.length > 0) {  // at least one key was pressed
      textAdd = theseKeys[theseKeys.length-1]; 
      }
    
      if (textAdd === 'return') {
          textAdd = '';  // Add nothing
          continueRoutine = false;  // End routine (if that is what you want)
      } else if (textAdd === 'space') {
          textAdd = ' ';  // Add a space
      } else if (textAdd === 'backspace') {
          text.text = text.text.slice(0, -1);
          textAdd = undefined;
      } else if (['lshift', 'rshift'].includes(textAdd)) {
          modify = true;
      } else if (textAdd !== undefined) {
          if (modify) {
              text.text = text.text + textAdd.toUpperCase();
              modify = false;
          } else {
              text.text = text.text + textAdd
          }
          textAdd = undefined;
      }
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *displayText* updates
    if (t >= 0.0 && displayText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      displayText.tStart = t;  // (not accounting for frame time here)
      displayText.frameNStart = frameN;  // exact frame index
      
      displayText.setAutoDraw(true);
    }

    
    if (displayText.status === PsychoJS.Status.STARTED){ // only update if being drawn
      displayText.setText('');
    }
    
    // *copyText* updates
    if (t >= 0.0 && copyText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      copyText.tStart = t;  // (not accounting for frame time here)
      copyText.frameNStart = frameN;  // exact frame index
      
      copyText.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of phase2_recallattemptComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function phase2_recallattemptRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'phase2_recallattempt'-------
    for (const thisComponent of phase2_recallattemptComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('RecallAttemptTyped', text.text);
    
    text.text = ''
    textFill = ''
    
    recalltstop = phase2_recallattemptClock.getTime();
    
    recallrt = recalltstop - recalltstart;
    // the Routine "phase2_recallattempt" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _FOK_resp_allKeys;
var phase2_FOKComponents;
function phase2_FOKRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'phase2_FOK'-------
    t = 0;
    phase2_FOKClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    FOK_resp.keys = undefined;
    FOK_resp.rt = undefined;
    _FOK_resp_allKeys = [];
    FOKJtstart = t;
    // keep track of which components have finished
    phase2_FOKComponents = [];
    phase2_FOKComponents.push(FOK_prompt);
    phase2_FOKComponents.push(FOK_resp);
    phase2_FOKComponents.push(FOK_scale);
    
    for (const thisComponent of phase2_FOKComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function phase2_FOKRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'phase2_FOK'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = phase2_FOKClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *FOK_prompt* updates
    if (t >= 0.0 && FOK_prompt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FOK_prompt.tStart = t;  // (not accounting for frame time here)
      FOK_prompt.frameNStart = frameN;  // exact frame index
      
      FOK_prompt.setAutoDraw(true);
    }

    
    // *FOK_resp* updates
    if (t >= 0.0 && FOK_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FOK_resp.tStart = t;  // (not accounting for frame time here)
      FOK_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { FOK_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { FOK_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { FOK_resp.clearEvents(); });
    }

    if (FOK_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = FOK_resp.getKeys({keyList: ['1', '2', '3', '4', '5'], waitRelease: false});
      _FOK_resp_allKeys = _FOK_resp_allKeys.concat(theseKeys);
      if (_FOK_resp_allKeys.length > 0) {
        FOK_resp.keys = _FOK_resp_allKeys[_FOK_resp_allKeys.length - 1].name;  // just the last key pressed
        FOK_resp.rt = _FOK_resp_allKeys[_FOK_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *FOK_scale* updates
    if (t >= 0.0 && FOK_scale.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FOK_scale.tStart = t;  // (not accounting for frame time here)
      FOK_scale.frameNStart = frameN;  // exact frame index
      
      FOK_scale.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of phase2_FOKComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function phase2_FOKRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'phase2_FOK'-------
    for (const thisComponent of phase2_FOKComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('FOK_resp.keys', FOK_resp.keys);
    if (typeof FOK_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('FOK_resp.rt', FOK_resp.rt);
        routineTimer.reset();
        }
    
    FOK_resp.stop();
    FOKJtstop = phase2_FOKClock.getTime();
    
    FOKrt = FOKJtstop - FOKJtstart;
    
    combrt = FOKrt + recallrt;
    
    psychoJS.experiment.addData("RecallRT", recallrt);
    psychoJS.experiment.addData("FOKRT", FOKrt);
    psychoJS.experiment.addData("CombinedRT", combrt);
    
    // the Routine "phase2_FOK" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _phase3_cont_allKeys;
var phase3_instruct_start;
var phase3_instructionsComponents;
function phase3_instructionsRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'phase3_instructions'-------
    t = 0;
    phase3_instructionsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    phase3_cont.keys = undefined;
    phase3_cont.rt = undefined;
    _phase3_cont_allKeys = [];
    phase3_instruct_start = t;
    
    // keep track of which components have finished
    phase3_instructionsComponents = [];
    phase3_instructionsComponents.push(restudy_instruct);
    phase3_instructionsComponents.push(phase3_cont);
    
    for (const thisComponent of phase3_instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function phase3_instructionsRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'phase3_instructions'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = phase3_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *restudy_instruct* updates
    if (t >= 0.0 && restudy_instruct.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      restudy_instruct.tStart = t;  // (not accounting for frame time here)
      restudy_instruct.frameNStart = frameN;  // exact frame index
      
      restudy_instruct.setAutoDraw(true);
    }

    
    // *phase3_cont* updates
    if (t >= 0.0 && phase3_cont.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      phase3_cont.tStart = t;  // (not accounting for frame time here)
      phase3_cont.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { phase3_cont.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { phase3_cont.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { phase3_cont.clearEvents(); });
    }

    if (phase3_cont.status === PsychoJS.Status.STARTED) {
      let theseKeys = phase3_cont.getKeys({keyList: ['space'], waitRelease: false});
      _phase3_cont_allKeys = _phase3_cont_allKeys.concat(theseKeys);
      if (_phase3_cont_allKeys.length > 0) {
        phase3_cont.keys = _phase3_cont_allKeys[_phase3_cont_allKeys.length - 1].name;  // just the last key pressed
        phase3_cont.rt = _phase3_cont_allKeys[_phase3_cont_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of phase3_instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var phase3_instruct_end;
var phase3_instruct_duration;
var phase2to3_duration;
function phase3_instructionsRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'phase3_instructions'-------
    for (const thisComponent of phase3_instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    phase3_instruct_end = phase3_instructionsClock.getTime();
    
    phase3_instruct_duration = phase3_instruct_end - phase3_instruct_start;
    
    phase2to3_duration = break_duration + phase3_instruct_duration;
    
    psychoJS.experiment.addData("BreakDurationBetweenPhase2andPhase3", phase2to3_duration);
    // the Routine "phase3_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var restudy_codeComponents;
function restudy_codeRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'restudy_code'-------
    t = 0;
    restudy_codeClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    FaceFile = face_files[restudy_order[restudy_trial]];
    FullName = fullnames[restudy_order[restudy_trial]];
    
    if (restudy_trial === restudycatch1 ){
        doCatch = 1;
        } else {
            if (restudy_trial === restudycatch2) {
                doCatch = 1;
                } else {
                    doCatch = 0;
                }
            }
    
    
    if (restudy_trial === (numtrial/2)) {
        doRest = 1;
        } else {
            doRest = 0;
            }
    
    psychoJS.experiment.addData("Face",FaceFile);
    psychoJS.experiment.addData("Name",FullName);
    psychoJS.experiment.addData("ItemID", restudy_order[restudy_trial]);
    psychoJS.experiment.addData("RestudyTrial", restudy_trial);
    // keep track of which components have finished
    restudy_codeComponents = [];
    
    for (const thisComponent of restudy_codeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function restudy_codeRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'restudy_code'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = restudy_codeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of restudy_codeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function restudy_codeRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'restudy_code'-------
    for (const thisComponent of restudy_codeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "restudy_code" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_restudychoice_allKeys;
var restudycountdowndec;
var restudycountdown;
var phase3_restudychoiceComponents;
function phase3_restudychoiceRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'phase3_restudychoice'-------
    t = 0;
    phase3_restudychoiceClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    option_face.setImage(FaceFile);
    key_restudychoice.keys = undefined;
    key_restudychoice.rt = undefined;
    _key_restudychoice_allKeys = [];
    restudycountdowndec = ((numtrial / 2) - restudies);
    restudycountdown = Math.round(restudycountdowndec);
    
    
    countdown.setText(restudycountdown);
    // keep track of which components have finished
    phase3_restudychoiceComponents = [];
    phase3_restudychoiceComponents.push(restudyprompt);
    phase3_restudychoiceComponents.push(restudy_scale);
    phase3_restudychoiceComponents.push(option_face);
    phase3_restudychoiceComponents.push(key_restudychoice);
    phase3_restudychoiceComponents.push(countdown_prompt);
    phase3_restudychoiceComponents.push(countdown);
    
    for (const thisComponent of phase3_restudychoiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function phase3_restudychoiceRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'phase3_restudychoice'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = phase3_restudychoiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *restudyprompt* updates
    if (t >= 0.0 && restudyprompt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      restudyprompt.tStart = t;  // (not accounting for frame time here)
      restudyprompt.frameNStart = frameN;  // exact frame index
      
      restudyprompt.setAutoDraw(true);
    }

    
    // *restudy_scale* updates
    if (t >= 0.0 && restudy_scale.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      restudy_scale.tStart = t;  // (not accounting for frame time here)
      restudy_scale.frameNStart = frameN;  // exact frame index
      
      restudy_scale.setAutoDraw(true);
    }

    
    // *option_face* updates
    if (t >= 0.0 && option_face.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_face.tStart = t;  // (not accounting for frame time here)
      option_face.frameNStart = frameN;  // exact frame index
      
      option_face.setAutoDraw(true);
    }

    
    // *key_restudychoice* updates
    if (t >= 0.0 && key_restudychoice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_restudychoice.tStart = t;  // (not accounting for frame time here)
      key_restudychoice.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_restudychoice.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_restudychoice.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_restudychoice.clearEvents(); });
    }

    if (key_restudychoice.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_restudychoice.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_restudychoice_allKeys = _key_restudychoice_allKeys.concat(theseKeys);
      if (_key_restudychoice_allKeys.length > 0) {
        key_restudychoice.keys = _key_restudychoice_allKeys[_key_restudychoice_allKeys.length - 1].name;  // just the last key pressed
        key_restudychoice.rt = _key_restudychoice_allKeys[_key_restudychoice_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *countdown_prompt* updates
    if (t >= 0.0 && countdown_prompt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      countdown_prompt.tStart = t;  // (not accounting for frame time here)
      countdown_prompt.frameNStart = frameN;  // exact frame index
      
      countdown_prompt.setAutoDraw(true);
    }

    
    // *countdown* updates
    if (t >= 0.0 && countdown.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      countdown.tStart = t;  // (not accounting for frame time here)
      countdown.frameNStart = frameN;  // exact frame index
      
      countdown.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of phase3_restudychoiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var doRestudy;
function phase3_restudychoiceRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'phase3_restudychoice'-------
    for (const thisComponent of phase3_restudychoiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_restudychoice.keys', key_restudychoice.keys);
    if (typeof key_restudychoice.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_restudychoice.rt', key_restudychoice.rt);
        routineTimer.reset();
        }
    
    key_restudychoice.stop();
    if ((key_restudychoice.keys === "right")) {
        if ((restudies < (numtrial / 2))) {
            doRestudy = 1;
            restudies = (restudies + 1);
        } else {
            doRestudy = 0;
        }
    } else {
        doRestudy = 0;
    }
    
    psychoJS.experiment.addData("RestudyChoice",doRestudy);
    
    restudy_trial = (restudy_trial + 1);
    
    // the Routine "phase3_restudychoice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var phase3_encodeComponents;
function phase3_encodeRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'phase3_encode'-------
    t = 0;
    phase3_encodeClock.reset(); // clock
    frameN = -1;
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    restudyname.setText(FullName);
    restudyface.setImage(FaceFile);
    // keep track of which components have finished
    phase3_encodeComponents = [];
    phase3_encodeComponents.push(restudyname);
    phase3_encodeComponents.push(restudyface);
    
    for (const thisComponent of phase3_encodeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function phase3_encodeRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'phase3_encode'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = phase3_encodeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *restudyname* updates
    if (t >= 0.0 && restudyname.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      restudyname.tStart = t;  // (not accounting for frame time here)
      restudyname.frameNStart = frameN;  // exact frame index
      
      restudyname.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (restudyname.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      restudyname.setAutoDraw(false);
    }
    
    // *restudyface* updates
    if (t >= 0.0 && restudyface.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      restudyface.tStart = t;  // (not accounting for frame time here)
      restudyface.frameNStart = frameN;  // exact frame index
      
      restudyface.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (restudyface.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      restudyface.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of phase3_encodeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function phase3_encodeRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'phase3_encode'-------
    for (const thisComponent of phase3_encodeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _satisfaction_rating_allKeys;
var satisfactionComponents;
function satisfactionRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'satisfaction'-------
    t = 0;
    satisfactionClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    satisfaction_rating.keys = undefined;
    satisfaction_rating.rt = undefined;
    _satisfaction_rating_allKeys = [];
    // keep track of which components have finished
    satisfactionComponents = [];
    satisfactionComponents.push(satisfaction_prompt);
    satisfactionComponents.push(satisfaction_rating);
    satisfactionComponents.push(satisfaction_scale);
    
    for (const thisComponent of satisfactionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function satisfactionRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'satisfaction'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = satisfactionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *satisfaction_prompt* updates
    if (t >= 0.0 && satisfaction_prompt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      satisfaction_prompt.tStart = t;  // (not accounting for frame time here)
      satisfaction_prompt.frameNStart = frameN;  // exact frame index
      
      satisfaction_prompt.setAutoDraw(true);
    }

    
    // *satisfaction_rating* updates
    if (t >= 0.0 && satisfaction_rating.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      satisfaction_rating.tStart = t;  // (not accounting for frame time here)
      satisfaction_rating.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { satisfaction_rating.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { satisfaction_rating.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { satisfaction_rating.clearEvents(); });
    }

    if (satisfaction_rating.status === PsychoJS.Status.STARTED) {
      let theseKeys = satisfaction_rating.getKeys({keyList: ['1', '2', '3', '4', '5'], waitRelease: false});
      _satisfaction_rating_allKeys = _satisfaction_rating_allKeys.concat(theseKeys);
      if (_satisfaction_rating_allKeys.length > 0) {
        satisfaction_rating.keys = _satisfaction_rating_allKeys[_satisfaction_rating_allKeys.length - 1].name;  // just the last key pressed
        satisfaction_rating.rt = _satisfaction_rating_allKeys[_satisfaction_rating_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *satisfaction_scale* updates
    if (t >= 0.0 && satisfaction_scale.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      satisfaction_scale.tStart = t;  // (not accounting for frame time here)
      satisfaction_scale.frameNStart = frameN;  // exact frame index
      
      satisfaction_scale.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of satisfactionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function satisfactionRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'satisfaction'-------
    for (const thisComponent of satisfactionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('satisfaction_rating.keys', satisfaction_rating.keys);
    if (typeof satisfaction_rating.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('satisfaction_rating.rt', satisfaction_rating.rt);
        routineTimer.reset();
        }
    
    satisfaction_rating.stop();
    // the Routine "satisfaction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _FOK_cont_resp_allKeys;
var FOKexp_exitComponents;
function FOKexp_exitRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'FOKexp_exit'-------
    t = 0;
    FOKexp_exitClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    FOK_cont_resp.keys = undefined;
    FOK_cont_resp.rt = undefined;
    _FOK_cont_resp_allKeys = [];
    // keep track of which components have finished
    FOKexp_exitComponents = [];
    FOKexp_exitComponents.push(FOK_cont_text);
    FOKexp_exitComponents.push(FOK_cont_resp);
    
    for (const thisComponent of FOKexp_exitComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function FOKexp_exitRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'FOKexp_exit'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = FOKexp_exitClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *FOK_cont_text* updates
    if (t >= 0.0 && FOK_cont_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FOK_cont_text.tStart = t;  // (not accounting for frame time here)
      FOK_cont_text.frameNStart = frameN;  // exact frame index
      
      FOK_cont_text.setAutoDraw(true);
    }

    
    // *FOK_cont_resp* updates
    if (t >= 0.0 && FOK_cont_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FOK_cont_resp.tStart = t;  // (not accounting for frame time here)
      FOK_cont_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { FOK_cont_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { FOK_cont_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { FOK_cont_resp.clearEvents(); });
    }

    if (FOK_cont_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = FOK_cont_resp.getKeys({keyList: ['space'], waitRelease: false});
      _FOK_cont_resp_allKeys = _FOK_cont_resp_allKeys.concat(theseKeys);
      if (_FOK_cont_resp_allKeys.length > 0) {
        FOK_cont_resp.keys = _FOK_cont_resp_allKeys[_FOK_cont_resp_allKeys.length - 1].name;  // just the last key pressed
        FOK_cont_resp.rt = _FOK_cont_resp_allKeys[_FOK_cont_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of FOKexp_exitComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var exp_end;
var study_durationms;
var study_duration;
function FOKexp_exitRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'FOKexp_exit'-------
    for (const thisComponent of FOKexp_exitComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    date = new Date();
    exp_end = date.getTime();
    
    study_durationms = exp_end - exp_begin;
    study_duration = study_durationms / 1000;
    
    psychoJS.experiment.addData("ExperimentDuration", study_duration);
    
    document.body.style.cursor='auto';
    
    // the Routine "FOKexp_exit" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
