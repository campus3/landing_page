docute.init({
    landing: 'landing.html',
    title: 'Campus3',
    repo: 'campus3/landing_page',
    twitter: 'fetcampus3',
    plugins: [
        evanyou(),
        player()
    ]
});

function player () {
    return function (context) {
        context.event.on('landing:updated', function () {
            console.log('landing:updated');
            clearPlayer();
            aplayer1();
        });
        context.event.on('content:updated', function () {
            console.log('content:updated');
            clearPlayer();
            for (let i = 0; i < document.querySelectorAll('.load').length; i++) {
                document.querySelectorAll('.load')[i].addEventListener('click', function () {
                    window[this.parentElement.id] && window[this.parentElement.id]();
                });
            }
        });
    };
}

function clearPlayer () {
    for (let i = 0; i < 10; i++) {
        if (window['ap' + i]) {
            window['ap' + i].destroy();
        }
    }
}

function aplayer1 () {
    window.ap1 = new APlayer({
        container: document.getElementById('aplayer1'),
        theme: '#F57F17',
        audio: [{
            name: 'Radio Campus3',
            artist: 'Live',
            url: 'http://stream.campus3.fr/live-320.mp3',
            cover: 'icone_radio.jpg',
            theme: '#ebd0c2'
        }]
    });
}