<script>
    export let upperFillColor = "cornsilk";
    export let lowerFillColor = "deeppink";
    export let arcColor = "white";
    export let doubleDashColor = "#8947c4";
    export let iconShape = "";
    export let nDots = 3;
    export let nameFirst = "Heike";
    export let nameSecond = "Leitte";
    export let fontSize = 4;

    function polar2cartesian( r, theta ) {
        let x = r * Math.cos( theta * Math.PI / 180 );
        let y = r * Math.sin( theta * Math.PI / 180 );
        return [x,y]
    }
</script>

<svelte:head>
    <link href='https://fonts.googleapis.com/css?family=Gloria+Hallelujah' rel='stylesheet'>
</svelte:head>

<div style:margin="30px" style:transform="rotate(50deg)">
    <svg style:font-size="{fontSize}pt" height="300" width="300" viewBox="-50 -50 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle r="45" cx="0" cy="0" stroke="gray" fill="white" />
        <path d="M{polar2cartesian(45,-97)} A 45,45 0 1 1 {polar2cartesian(45,97)} Z" fill="{upperFillColor}" transform="rotate(180)"/>
        <path d="M{polar2cartesian(45,-70)} A 45,45 0 0 1 {polar2cartesian(45,70)} Z" fill="{lowerFillColor}" transform="rotate(0)"/>
        <path d="M{polar2cartesian(40,-40)} A 40,40 0 0 1 {polar2cartesian(40,0)}" stroke="{arcColor}" stroke-width="4px" stroke-linecap="round" fill="none" transform="rotate(-100)" />
        {#each new Array(nDots) as k,i }
            <circle r="1.5" cx="10" cy="{-39 + i*4}" fill="#000000" />
        {/each}
        <path id="curveUpper" d="M{polar2cartesian(36,118+fontSize*3)} A 60,60 0 0 0 {polar2cartesian(45,-5-fontSize)}" stroke="none" fill="none"/>
        <path id="curveLower" d="M{polar2cartesian(38,110)} A 60,60 0 0 0 {polar2cartesian(45,10)}" stroke="none" fill="none"/>
        <text>
            <textPath xlink:href="#curveUpper">
                {nameFirst.toUpperCase()}
            </textPath>
        </text>
        <text><textPath xlink:href="#curveLower">{nameSecond.toUpperCase()}</textPath></text>
        <!--
            editor: https://yqnn.github.io/svg-path-editor/
            transform: https://stackoverflow.com/questions/22131798/using-multiple-svg-transformations-at-the-same-time
        <path d="m 1 2 l 7 3 l -1 1 l -8 -3 l -1 1 l 11 0 l -7 4 l 3 -8" stroke="black" stroke-width="2px" stroke-linecap="round" fill="none" transform="matrix(4 0 0 4 -10 -20)"/>
        -->
        <path d="M{polar2cartesian(44.5,-160)} L -18,{polar2cartesian(44.5,-160)[1]}" stroke="{doubleDashColor}" stroke-width="4px" stroke-linecap="round" fill="none"/>
        <path d="M{polar2cartesian(44.5,-164)} L -18,{polar2cartesian(44.5,-164)[1]}" stroke="{doubleDashColor}" stroke-width="4px" stroke-linecap="round" fill="none"/>
        <path d="{iconShape}" stroke="black" stroke-width="2px" fill="none" transform="translate(-1, -5) scale(1.1)"/>
        <circle r="45" cx="0" cy="0" stroke="gray" fill="none" />
    </svg>
</div>

<style>
    svg * {
        vector-effect: non-scaling-stroke;
    }

    svg text {
        font-family: Gloria Hallelujah;
        font-weight: 600;
        letter-spacing: 1px;
    }
</style>