console.log('test000')

var task_name = "atten_cat";
var sbj_id = "test01";

//you must put your save_data php url here.
var save_url = "https://users.rcc.uchicago.edu/~zz112/exp_data/save_data.php";
var data_dir = task_name;

//my preference is to include the task and sbj_id in the file name
var file_name = task_name + '_' + sbj_id;

var repo_site = "https://ziweizhang0304.github.io/atten_cat/";

var timeline = [];

/* -----Import Some Functions-----*/
//import {shuffle, getRandom} from repo_site + 'js/utility.js';
function shuffle(array) { //export shuffle = function(arr, n)
  var currentIndex = array.length,  randomIndex;  // While there remain elements to shuffle...

  while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  };

function getRandom(arr, n) { //export getRandom = function(arr, n)
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}


// Shuffle category boundary
var S1B = getRandom([0,1],1)[0]; //if 0, then cat boundary is 45 deg; if 1, then 135 deg
var S2B = getRandom([0,1],1)[0]; //if 0, then cat boundary is 45 deg; if 1, then 135 deg

// Shuffle whether odd or even numbers are learning
var S1F = getRandom([0,1],1)[0]; //if 0, then learning given to [0,2,4,6,8,10]; if 1, then learning given to [1,3,5,7,9,11]
var S2F = getRandom([0,1],1)[0]; //if 0, then learning given to [0,2,4,6,8,10]; if 1, then learning given to [1,3,5,7,9,11]

//motor response
//var CR_rand = getRandom([0,1],1); // if 0, cat 1 is J, cat 2 is K; if 1, cat 1 is J, cat 2 is K;
var CR_rand = shuffle([0,1]);
var CR = CR_rand[0];
var resp = ['j','k'];
var C1_resp = resp[CR];
var C2_resp = resp[CR_rand[1]];

//Stimuli
var stim_face = [
repo_site + 'test_stim/human_faces/01_03.png',repo_site +'test_stim/human_faces/01_04.png',repo_site +'test_stim/human_faces/01_05.png',repo_site +'test_stim/human_faces/01_06.png',
repo_site + 'test_stim/human_faces/02_04.png',repo_site +'test_stim/human_faces/02_05.png',
repo_site + 'test_stim/human_faces/03_08.png',repo_site +'test_stim/human_faces/04_08.png',repo_site +'test_stim/human_faces/05_08.png',repo_site +'test_stim/human_faces/06_08.png',
repo_site + 'test_stim/human_faces/04_07.png',repo_site +'test_stim/human_faces/05_07.png',
repo_site + 'test_stim/human_faces/03_01.png',repo_site +'test_stim/human_faces/04_01.png',repo_site +'test_stim/human_faces/05_01.png',repo_site +'test_stim/human_faces/06_01.png',
repo_site + 'test_stim/human_faces/04_02.png',repo_site +'test_stim/human_faces/05_02.png',
repo_site + 'test_stim/human_faces/08_03.png',repo_site +'test_stim/human_faces/08_04.png',repo_site +'test_stim/human_faces/08_05.png',repo_site +'test_stim/human_faces/08_06.png',
repo_site + 'test_stim/human_faces/07_04.png',repo_site +'test_stim/human_faces/07_05.png'];

var stim_house = [
repo_site +'test_stim/houses/01_03.png',repo_site +'test_stim/houses/01_04.png',repo_site +'test_stim/houses/01_05.png',repo_site +'test_stim/houses/01_06.png',
repo_site +'test_stim/houses/02_04.png',repo_site +'test_stim/houses/02_05.png',
repo_site +'test_stim/houses/03_08.png',repo_site +'test_stim/houses/04_08.png',repo_site +'test_stim/houses/05_08.png',repo_site +'test_stim/houses/06_08.png',
repo_site +'test_stim/houses/04_07.png',repo_site +'test_stim/houses/05_07.png',
repo_site +'test_stim/houses/03_01.png',repo_site +'test_stim/houses/04_01.png',repo_site +'test_stim/houses/05_01.png',repo_site +'test_stim/houses/06_01.png',
repo_site +'test_stim/houses/04_02.png',repo_site +'test_stim/houses/05_02.png',
repo_site +'test_stim/houses/08_03.png',repo_site +'test_stim/houses/08_04.png',repo_site +'test_stim/houses/08_05.png',repo_site +'test_stim/houses/08_06.png',
repo_site +'test_stim/houses/07_04.png',repo_site +'test_stim/houses/07_05.png'];
// This ensures that images appear exactly when we tell them to.
var pre_load_list = stim_face.concat(stim_house);
jsPsych.pluginAPI.preloadImages(pre_load_list);

// Define category boundary, learning and test stim
// --- Face --- //
if (S1B == 0){//45 deg boundary
    if (CR == 0){
    var stim_face_C1 = stim_face.slice(0,12)
    var stim_face_C2 = stim_face.slice(12,stim_face.length)

  }
    else {
    var stim_face_C2 = stim_face.slice(0,12)
    var stim_face_C1 = stim_face.slice(12,stim_face.length)
  }
}
else {
    if (CR == 0){
    var stim_face_C1 = [0,1,2,3,4,5,12,13,14,15,16,17].map(x=>stim_face[x])
    var stim_face_C2 = [6,7,8,9,10,11,18,19,20,21,22,23].map(x=>stim_face[x])
   }
    else {
    var stim_face_C2 = [0,1,2,3,4,5,12,13,14,15,16,17].map(x=>stim_face[x])
    var stim_face_C1 = [6,7,8,9,10,11,18,19,20,21,22,23].map(x=>stim_face[x])
    }
};

// --- House --- //
if (S2B == 0){//45 deg boundary
    if (CR == 0){
    var stim_house_C1 = stim_house.slice(0,12)
    var stim_house_C2 = stim_house.slice(12,stim_house.length)
  }
    else {
    var stim_house_C2 = stim_house.slice(0,12)
    var stim_house_C1 = stim_house.slice(12,stim_house.length)
  }
}
else {
    if (CR == 0){
    var stim_house_C1 = [0,1,2,3,4,5,12,13,14,15,16,17].map(x=>stim_house[x])
    var stim_house_C2 = [6,7,8,9,10,11,18,19,20,21,22,23].map(x=>stim_house[x])
   }
    else {
    var stim_house_C2 = [0,1,2,3,4,5,12,13,14,15,16,17].map(x=>stim_house[x])
    var stim_house_C1 = [6,7,8,9,10,11,18,19,20,21,22,23].map(x=>stim_house[x])
    }
};

if (S1F == 0){ //even learning
    var stim_face_C1_F = [0,2,4,6,8,10].map(x=>stim_face_C1[x])
    var stim_face_C1_T = [1,3,5,7,9,11].map(x=>stim_face_C1[x])
    var stim_face_C2_F = [1,3,5,7,9,11].map(x=>stim_face_C2[x])
    var stim_face_C2_T = [0,2,4,6,8,10].map(x=>stim_face_C2[x])
} else {
    var stim_face_C1_T = [0,2,4,6,8,10].map(x=>stim_face_C1[x])
    var stim_face_C1_F = [1,3,5,7,9,11].map(x=>stim_face_C1[x])
    var stim_face_C2_T = [1,3,5,7,9,11].map(x=>stim_face_C2[x])
    var stim_face_C2_F = [0,2,4,6,8,10].map(x=>stim_face_C2[x])
}

if (S2F == 0){ //even learning
    var stim_house_C1_F = [0,2,4,6,8,10].map(x=>stim_house_C1[x])
    var stim_house_C1_T = [1,3,5,7,9,11].map(x=>stim_house_C1[x])
    var stim_house_C2_F = [1,3,5,7,9,11].map(x=>stim_house_C2[x])
    var stim_house_C2_T = [0,2,4,6,8,10].map(x=>stim_house_C2[x])
} else {
    var stim_house_C1_T = [0,2,4,6,8,10].map(x=>stim_house_C1[x])
    var stim_house_C1_F = [1,3,5,7,9,11].map(x=>stim_house_C1[x])
    var stim_house_C2_T = [1,3,5,7,9,11].map(x=>stim_house_C2[x])
    var stim_house_C2_F = [0,2,4,6,8,10].map(x=>stim_house_C2[x])
}

/* -----Stimuli Set-----*/
//Feedback (or learning)
var learning_stimuli_object = []
var learning_stimuli_list = stim_face_C1_F.concat(stim_face_C2_F, stim_house_C1_F, stim_house_C2_F);

for (j = 0; j < learning_stimuli_list.length; j++) {
    var learning_stimuli = new Object();

    learning_stimuli.stimulus = learning_stimuli_list[j]; //repo_site +
    console.log(learning_stimuli_list[j]);

    learning_stimuli.data = new Object();

    if (stim_face_C1_F.includes(learning_stimuli.stimulus)) {
        learning_stimuli.data.set = 'face';
        learning_stimuli.data.category = 'C1';
        learning_stimuli.data.correct_response = resp[CR];
        learning_stimuli.data.boundary = S1B;
        learning_stimuli.data.feedback_num = S1F;

    } else if (stim_face_C2_F.includes(learning_stimuli.stimulus)) {
        learning_stimuli.data.set = 'face';
        learning_stimuli.data.category = 'C2';
        learning_stimuli.data.correct_response = resp[CR_rand[1]];
        learning_stimuli.data.boundary = S1B;
        learning_stimuli.data.feedback_num = S1F;

    } else if (stim_house_C1_F.includes(learning_stimuli.stimulus)) {
        learning_stimuli.data.set = 'house';
        learning_stimuli.data.category = 'C1';
        learning_stimuli.data.correct_response = resp[CR];
        learning_stimuli.data.boundary_cont = S2B;
        learning_stimuli.data.feedback_cont = S2F;

    } else if (stim_house_C2_F.includes(learning_stimuli.stimulus)){
        learning_stimuli.data.set = 'house';
        learning_stimuli.data.category = 'C2';
        learning_stimuli.data.correct_response = resp[CR_rand[1]];
        learning_stimuli.data.boundary = S2B;
        learning_stimuli.data.feedback_num = S2F;

    } else {
        console.log('not in any of the cats, might be something wrong.')
    }

    //learning_stimuli.at_fix = rep(stimuli_first3.at_stimulus_first3);

    learning_stimuli.data.test_part = 'test';
    learning_stimuli.data.TaskType = 'learning';
    learning_stimuli.data.repsonse_cont = CR;
    learning_stimuli_object.push(learning_stimuli);
};

//Testing
var test_stimuli_object = []
var test_stimuli_list = stim_face_C1_T.concat(stim_face_C2_T, stim_house_C1_T, stim_house_C2_T);

for (j = 0; j < test_stimuli_list.length; j++) {
    var test_stimuli = new Object();

    test_stimuli.stimulus = test_stimuli_list[j];

    test_stimuli.data = new Object();

    if (stim_face_C1_T.includes(test_stimuli.stimulus)) {
        test_stimuli.data.set = 'face';
        test_stimuli.data.category = 'C1';
        test_stimuli.data.correct_response = resp[CR];
        test_stimuli.data.boundary = S1B;
        test_stimuli.data.feedback_num = S1F;

    } else if (stim_face_C2_T.includes(test_stimuli.stimulus)) {
        test_stimuli.data.set = 'face';
        test_stimuli.data.category = 'C2';
        test_stimuli.data.correct_response = resp[CR_rand[1]];
        test_stimuli.data.boundary = S1B;
        test_stimuli.data.feedback_num = S1F;

    } else if (stim_house_C1_T.includes(test_stimuli.stimulus)) {
        test_stimuli.data.set = 'house';
        test_stimuli.data.category = 'C1';
        test_stimuli.data.correct_response = resp[CR];
        test_stimuli.data.boundary = S2B;
        test_stimuli.data.feedback_num = S2F;

    } else if (stim_house_C2_T.includes(test_stimuli.stimulus)){
        test_stimuli.data.set = 'house';
        test_stimuli.data.category = 'C2';
        test_stimuli.data.correct_response = resp[CR_rand[1]];
        test_stimuli.data.boundary = S2B;
        test_stimuli.data.feedback_num = S2F;

    } else {
        console.log('not in any of the cats, might be something wrong.')
    }

    //test_stimuli.at_fix = rep(stimuli_first3.at_stimulus_first3);

    test_stimuli.data.test_part = 'test';
    test_stimuli.data.TaskType = 'testing';
    test_stimuli.data.repsonse_cont = CR;
    test_stimuli_object.push(test_stimuli);
};



/* -----Study-----*/
var enter_full = {
  type: 'fullscreen',
  fullscreen_mode: true
};
timeline.push(enter_full);

/* -----Give consent-----*/
var check_consent = function(elem) {
  if (document.getElementById('consent_checkbox').checked) {
    return true;
  }
  else {
    alert("If you wish to participate, you must check the box next to the statement 'I agree to participate in this study.'");
    return false;
  }
  return false;
};

var consent = {
  type: 'external-html',
  url: repo_site + "content/consent.html",
  cont_fn: check_consent,
  cont_btn: 'start',
};
//timeline.push(consent);

/* -----Instructions----- */
var instruction = {
    type: 'instructions',
    pages: [
        /* -----instr_1----- */
        '<p style="color:black;font-size:26px">\n' +
        '        Welcome to the study! Please take a few minutes to read the instructions carefully. <br>\n' +
        '        <br>\n' +
        '        This is a three-part experiment. We will now go through the instructions for the first part. <br>\n' +
        '\n' +
        '    </p>',

       /* -----instr_2----- */
        '<p style="color:black;font-size:26px">\n' +
        '        In the first part, you will see different images.  <br>\n' +
        '         <br>\n' +
        '        Some shapes will appear very frequently, like these: <br>\n' +
        '    </p>\n' +
        '        <br>\n' +
        '    <p>\n' +
        '       <img src="https://ziweizhang0304.github.io/Stats_learning_trig/img/Stim/FN_001_w.png" /> <img src="https://ziweizhang0304.github.io/Stats_learning_trig/img/Stim/FN_002_w.png" />\n' +
        '       <img src="https://ziweizhang0304.github.io/Stats_learning_trig/img/Stim/FN_003_w.png" /> <img src="https://ziweizhang0304.github.io/Stats_learning_trig/img/Stim/FN_004_w.png" />\n' +
        '       <img src="https://ziweizhang0304.github.io/Stats_learning_trig/img/Stim/FN_005_w.png" /> <img src="https://ziweizhang0304.github.io/Stats_learning_trig/img/Stim/FN_006_w.png" />\n' +
        '       <img src="https://ziweizhang0304.github.io/Stats_learning_trig/img/Stim/FN_007_w.png" /> <img src="https://ziweizhang0304.github.io/Stats_learning_trig/img/Stim/FN_008_w.png" />\n' +
        '       <img src="https://ziweizhang0304.github.io/Stats_learning_trig/img/Stim/FN_009_w.png" /> <img src="https://ziweizhang0304.github.io/Stats_learning_trig/img/Stim/FN_010_w.png" />\n' +
        '       <img src="https://ziweizhang0304.github.io/Stats_learning_trig/img/Stim/FN_011_w.png" /> <img src="https://ziweizhang0304.github.io/Stats_learning_trig/img/Stim/FN_012_w.png" />\n' +
        '        <br>\n' +
        '    </p>\n' +
        '        <br>\n' +
        '    </p>',

        /* -----instr_3----- */
        '    <p style="color:black;font-size:26px">\n' +
        '        However, occasionally, you will encounter L-shapes that look like these: <br>\n' +
        '    </p>\n' +

        '        <br>\n' +

        '    <p>\n' +
        '       <img src="https://ziweizhang0304.github.io/Stats_learning_trig/img/Stim/IF_001_w.png" /> <img src="https://ziweizhang0304.github.io/Stats_learning_trig/img/Stim/IF_002_w.png" />\n' +
        '       <img src="https://ziweizhang0304.github.io/Stats_learning_trig/img/Stim/IF_003_w.png" /> <img src="https://ziweizhang0304.github.io/Stats_learning_trig/img/Stim/IF_004_w.png" />\n' +
        '\n' +
        '        <br>\n' +
        '    </p>\n' +

        '        <br>\n' +

        '    <p style="color:black;font-size:26px">\n' +
        '        Do NOT press any keys when you encounter these rare L-shapes. <br>\n' +
        '         And PRESS THE SPACEBAR to all the other shapes. <br>\n' +
        '        <br>\n' +
        '        The shapes will go by quickly so you should pay attention to them. <br>\n' +
        '\n' +
        '    </p>',

        /* -----instr_4----- */
        '<p style="color:black;font-size:26px">\n' +
        '    Now you will do a short practice of this part of the experiment. <br>\n' +
        '        <br>\n' +
        '    Note that you will see learning on your performance during this practice but not during the real experiment. <br>\n'+
        '        <br>\n' +
        '    Now, click on ‘next’ to start the practice. <br>\n' +
        '</p> <br>'
    ],
    show_clickable_nav: true,
}
//timeline.push(instruction);


/* define fixation */
var fixation = {
  type: 'html-keyboard-response',
  stimulus: '<div style="margin-top: 30px; font-size:50px;">+</div>',
  choices: jsPsych.NO_KEYS,
  trial_duration() {
    return Math.floor(Math.random() * 200) + 1600  //Math.floor(Math.random() * 200) + 800
  },
}
/* define learning trials */
var learning = {
  type: "image-keyboard-response",
  stimulus: jsPsych.timelineVariable('stimulus'),
  choices: ['j', 'k'],
  data: jsPsych.timelineVariable('data'),
  trial_duration: 2400,
  on_finish: function (data) {
      data.correct = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.correct_response);
  }
};

/* define feedback trials */
var feedback = {
  type: "image-keyboard-response",
  stimulus: function(){
    var last_trial_correct = jsPsych.data.get().filter({TaskType: 'learning'}).last(1).values()[0].correct;
    if(last_trial_correct){
      return repo_site + 'test_stim/correct.png'
    } else {
      return repo_site + 'test_stim/incorrect.png'
    }
  },
  choices: jsPsych.NO_KEYS,
  trial_duration: 1600
};


/* define learning procedure */
var learning_procedure = {
  timeline: [fixation, learning, feedback],
  timeline_variables: learning_stimuli_object,
  randomize_order: true,
  repetitions: 6
};
timeline.push(learning_procedure);

/* -----Phase 2: test category learning-----*/
/* define testing trials */
var testing = {
  type: "image-keyboard-response",
  stimulus: jsPsych.timelineVariable('stimulus'),
  choices: ['j', 'k'],
  data: jsPsych.timelineVariable('data'),
  trial_duration: 1600,
  on_finish: function (data) {
      data.correct = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.correct_response);
  }
};
/* define testing procedure */
var testing_procedure = {
  timeline: [fixation, testing],
  timeline_variables: test_stimuli_object
};
timeline.push(testing_procedure);


/* -----Phase 3: drag and drop-----*/
/* instruction */
var instruction5 = {
    type: 'instructions',
    pages: [
        /* -----instr_9----- */
        '<p style="color:black;font-size: 26px">\n' +
        '        In this section, we will ask you to group the images you learned during the first part of the experiment. <br>\n' +
        '        <br>\n' +
        '        Click on "Next" to move on. <br> \n' +
        '</p> <br>'
    ],
    show_clickable_nav: true,
}
timeline.push(instruction5);

/* define drag and drop trial */
var sort_trial_S1 = {
    type: 'free-sort',
    stimuli: stim_face,
    prompt: '<p>Drag the images outside of the box and arrange them below based on what you learned during the first part of the experiment. <br> When you drag and drop these images, you should make sure that there are space in between them in the box.</p>',
    stim_height: 800,
    stim_width: 800,
    scale_factor: 2,
    border_width: 2,
    sort_area_shape: "square",
    stim_starts_inside:false,
    sort_area_height: 100,
    sort_area_width: 300,
    column_spread_factor: 1.5,
    on_finish: function (data) {
        data.test_part = 'post_drag'
    }

};
timeline.push(sort_trial_S1);

var sort_trial_S2 = {
    type: 'free-sort',
    stimuli: stim_house,
    prompt: '<p>Drag the images outside of the box and arrange them below based on what you learned during the first part of the experiment. <br> When you drag and drop these images, you should make sure that there are space in between them in the box.</p>',
    stim_height: 800,
    stim_width: 800,
    scale_factor: 2,
    border_width: 2,
    sort_area_shape: "square",
    stim_starts_inside:false,
    sort_area_height: 100,
    sort_area_width: 300,
    column_spread_factor: 1.5,
    on_finish: function (data) {
        data.test_part = 'post_drag'
    }
};
timeline.push(sort_trial_S2);

/* -----Phase 4: questions about rule-----*/

/* -----Phase 5: CAB Lab demographics information-----*/
var DemoQ1_options = ["Male", "Female", "Gender Non-conforming", "Other", "Choose not to respond"];
var DemoQ2_options = ["Under 18", "18-24", "25-34", "35-44", "45-54", "55-64", "65-74", "75-84", "85 or older"];
var DemoQ3_options = ["Hispanic/Latino", "Not Hispanic/Latino", "Choose not to respond"];
var DemoQ4_options = ["American Indian/Native American","White", "Black/African American", "Asian", "Native Hawaiian or Pacific Islander", "More than one race", "Other","Choose not to respond"];
var DemoQ5_options = ["Less than a high school diploma", "High school degree or equivalent (e.g. GED)", "Some college, no degree", "Associate degree (e.g. AA, AS)", "College degree", "Master's degree (e.g. MA, MS, MEd)", "Doctorate or professional degree (e.g. MD, DDS, PhD)"];

var demographics = {
    type: 'survey-multi-choice',
    button_label: 'Next',
    preamble: 'Please answer some further questions on demographics.',
    questions: [
        { prompt: "What is your gender?", name: 'DemoQ1', options: DemoQ1_options, required: true },
        { prompt: "What is your age?", name: 'DemoQ2', options: DemoQ2_options, required: true },
        { prompt: "What is your Ethnicity?", name: 'DemoQ3', options: DemoQ3_options, required: true },
        { prompt: "How would you describe yourself? Please select all that apply.", name: 'DemoQ4', options: DemoQ4_options, required: true },
        { prompt: "What is the highest degree or level of school you have completed?", name: 'DemoQ5', options: DemoQ5_options, required: true },
    ],
};
timeline.push(demographics);


/* -----Finishing up by saving data-----*/
var interaction_data = jsPsych.data.getInteractionData();
jsPsych.data.checks = interaction_data;
function save_data_csv() {
    jQuery.ajax({
        type: 'post',
        cache: false,
        url: save_url,
        data: {
            data_dir: data_dir,
            file_name: file_name + '.csv', // the file type should be added
            exp_data: jsPsych.data.get().csv()
        }
    });
}


jsPsych.init({
    timeline: timeline,
    display_element: 'display_stage',
    preload_images: pre_load_list,
    on_finish: function () {
        save_data_csv();
    }
});
