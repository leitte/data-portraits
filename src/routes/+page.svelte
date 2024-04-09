<script>
    import Portrait from "./Portrait.svelte";
    import Questions from "./Questions.svelte";
    import { questionaire, nameFirst, nameSecond, textFontSize } from "./stores";

    const lowerFillColor = ["white", "#5077BC", "#F8C803", "#EF1158"];
    const upperFillColor = ["white", "#DFDED9", "#ffefdb", "#fff4ba", "#c3cfeb"];
    const arcColor = ["none", "white", "black"];
    const doubleDashColor = ["none", "#c90080","#8947c4","#872800","#00e9de","#f3cb32","#0047a5"];
    const iconShape = ["",
                       "M -15 -14 L 18 -14 L 18 -11 L -18 -11 L -18 -7 L 29 -7 L 29 -4 L -26 -4 L -26 2 L 27 2 L 27 5 L -23 5 L -23 9 L 25 9 L 25 12 L -23 12",
                       "M -15.3 -2.7 L -18.9 5.4 L 21.6 5.4 L -4.5 -16.2 L -9.9 15.3 L 21.6 -9 L -18.9 0 L 9 19.8 L 16.2 -23.4 L -8.1 19.8 L 18.9 15.3 L 0.9 -20.7 L -11.7 -17.1 L 18 25.2",
                       "M -15 10 L 5 10 L 5 -12 L -10 -12 L -10 17 L 9 17 L 9 -17 L -15 -17 L -15 5 L 14 5 L 14 -5 L -17 -5 L -17 0 L 17 0 L 17 19"
                      ]
    const nDots = [0,1,2,3,4];

    function getAnswerId( questionId ) {
        let question = $questionaire.find(item => item.idx === questionId);

        if (!question) {
            return 0;
        }

        return question.answer + 1;
    }
</script>

<svelte:head>
    <title>Data Portrait</title>
    <meta name="description" content="Computer generated personal data portraits." />
</svelte:head>

<h1 style:text-align="left">Data Portrait</h1>
<div style:margin-bottom="30px">Answer the following questions 
    and design your personal data portrait. Each answer maps to 
    a visual element and changes its color or shape.
</div>

<div class="wrapper">
    {#key $questionaire}
    <Portrait 
        nameFirst={$nameFirst}
        nameSecond={$nameSecond}
        fontSize={$textFontSize}
        lowerFillColor={lowerFillColor[getAnswerId(1)]}
        upperFillColor={upperFillColor[getAnswerId(2)]}
        arcColor={arcColor[getAnswerId(3)]}
        iconShape={iconShape[getAnswerId(4)]}
        doubleDashColor={doubleDashColor[getAnswerId(5)]}
        nDots={nDots[getAnswerId(6)]}
    />
    {/key}
    <Questions />
</div>

<style>
    .wrapper {
        display: flex;
        gap: 30px;
    }
</style>