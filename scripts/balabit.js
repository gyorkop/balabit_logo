(function ()
{
    window.addEventListener('load', function()
    {
        var logo_container = document.getElementById('logo_container');
        var reflection = document.getElementById('reflection');
        var context = reflection.getContext('2d');

        var logo = new Image();
        logo.type = 'image/svg+xml';
        logo.src  = 'balabit_logo.svg';

        logo_container.appendChild(logo);

        logo.addEventListener('load', function()
        {
            context.save();

            var reflection_height = logo.height / 3;
            context.translate(0, reflection_height);
            context.scale(1, -1);
            context.drawImage(logo, 0, 0, logo.width, reflection_height);

            context.restore();

            var gradient = context.createLinearGradient(0, 0, 0, reflection_height);

            gradient.addColorStop(0,   'rgba(255, 255, 255, 0.3)');
            gradient.addColorStop(0.7, 'rgba(255, 255, 255, 1)');

            context.fillStyle = gradient;
            context.rect(0, 0, logo.width, reflection_height);

            context.fill();
        }, true);
    }, true);
})();
