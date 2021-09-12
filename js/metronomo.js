 function playSound2(buffer, time, intensity) {
    var gainNode = context.createGain();
    var source = context.createBufferSource();
    source.buffer = buffer;

    // Connect source to a gain node
    source.connect(gainNode);
    // Connect gain node to destination
    gainNode.connect(context.destination);

    var gainval = intensity || 0.15;
    gainNode.gain.value = gainval;

    source[source.start ? 'start' : 'noteOn'](time);
}

//////////////////////////////////////////////////////////////////////////////
var RhythmSample = function () {
    loadSounds(this, {
        kick:  '/audio/kick.mp3' ,
    });
};


function playClick() {
    playSound2(sample.kick, 0, 1);
    if (metronomeOn) {
        setTimeout(function () {
            playClick();
        }, quarterNoteTime);
    }
}

$('#start').click(function () {
    metronomeOn = !metronomeOn;
    if (metronomeOn) playClick();
});

$('#stop').click(function () {
    metronomeOn = !metronomeOn;
    if (metronomeOn) playClick();
});

/*$('#bpm').on('keyup', function (e) {
    if (e.keyCode === 13) {
        tempo = $('#bpm').val();
        //     alert('tempo: ' + tempo);
        quarterNoteTime = 60 / tempo * 1000;
    }
});*/

///////////////////////////////////////////////////////////////////////////////////
var sample = new RhythmSample();

// initial setting;
var tempo = 100;
var quarterNoteTime = 60 / tempo * 1000;
var metronomeOn = false;