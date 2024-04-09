<script>
    export let upperFillColor = "cornsilk";
    export let lowerFillColor = "deeppink";
    export let arcColor = "white";
    export let name = "Heike";
    export let lastname = "Leitte";

    function polar2cartesian( r, theta ) {
        let x = r * Math.cos( theta * Math.PI / 180 );
        let y = r * Math.sin( theta * Math.PI / 180 );
        return [x,y]
    }
</script>

<svelte:head>
    <link href='https://fonts.googleapis.com/css?family=Gloria+Hallelujah' rel='stylesheet'>
</svelte:head>

<div style:margin="30px">
    <svg  height="300" width="300" viewBox="-50 -50 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle r="45" cx="0" cy="0" stroke="gray" fill="white" />
        <path d="M{polar2cartesian(45,-97)} A 45,45 0 1 1 {polar2cartesian(45,97)} Z" fill="{upperFillColor}" transform="rotate(-120)"/>
        <path d="M{polar2cartesian(45,-70)} A 45,45 0 0 1 {polar2cartesian(45,70)} Z" fill="{lowerFillColor}" transform="rotate(60)"/>
        <path d="M{polar2cartesian(40,-40)} A 40,40 0 0 1 {polar2cartesian(40,0)}" stroke="{arcColor}" stroke-width="4px" stroke-linecap="round" fill="none" transform="rotate(-30)" />
        <path id="curveUpper" d="M{polar2cartesian(33,175)} A 60,60 0 0 0 {polar2cartesian(45,44)}" stroke="none" fill="none"/>
        <path id="curveLower" d="M{polar2cartesian(38,160)} A 60,60 0 0 0 {polar2cartesian(45,60)}" stroke="none" fill="none"/>
        <text>
            <textPath xlink:href="#curveUpper">
                {name.toUpperCase()}
            </textPath>
        </text>
        <text><textPath xlink:href="#curveLower">{lastname.toUpperCase()}</textPath></text>
        <circle r="45" cx="0" cy="0" stroke="gray" fill="none" />
        <!--
            editor: https://yqnn.github.io/svg-path-editor/
            transform: https://stackoverflow.com/questions/22131798/using-multiple-svg-transformations-at-the-same-time
        -->
        <path d="m 1 2 l 7 3 l -1 1 l -8 -3 l -1 1 l 11 0 l -7 4 l 3 -8" stroke="black" stroke-width="2px" stroke-linecap="round" fill="none" transform="matrix(4 0 0 4 -10 -20)"/>
    </svg>
</div>

<style>
    svg * {
        vector-effect: non-scaling-stroke;
    }

    svg text {
        font-family: Gloria Hallelujah;
        font-size: 4pt;
        font-weight: 600;
        letter-spacing: 1px;
    }
</style>