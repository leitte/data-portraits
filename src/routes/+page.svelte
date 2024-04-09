<script>
    import Portrait from "./Portrait.svelte";
    import Questions from "./Questions.svelte";
    import { questionaire } from "./stores";

    const lowerFillColor = ["#5077BC", "#F8C803", "#EF1158"];
    const upperFillColor = ["#DFDED9", "#ffefdb", "#fff4b8", "#c3cfeb"];
    const arcColor = ["white", "black"];
</script>

<h1>Welcome to SvelteKit2</h1>

<div class="wrapper">
    <Portrait 
        lowerFillColor={lowerFillColor[$questionaire.find(item => item.idx === 1 || {answer: 0}).answer]}
        upperFillColor={upperFillColor[$questionaire.find(item => item.idx === 2).answer]}
        arcColor={arcColor[$questionaire.find(item => item.idx === 3).answer]}
    />
    <Questions />
</div>


<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<style>
    .wrapper {
        display: flex;
        gap: 30px;
    }
</style>