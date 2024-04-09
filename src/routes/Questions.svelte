<script>
    import {
        questionaire,
        nameFirst,
        nameSecond,
        textFontSize,
    } from "./stores";

    let answers = new Array($questionaire.length).fill(-1);
</script>

<form>
    <div class="item">
        <span>What's your first name?</span>
        <input bind:value={$nameFirst} />
    </div>
    <div class="item">
        <span>What's your last name?</span>
        <input bind:value={$nameSecond} />
    </div>
    <div class="item">
        <span>Font size of text</span>
        <input type="range" bind:value={$textFontSize} min="2" max="9" />
    </div>

    {#each $questionaire as item, qid}
        <div class="item">
            <span>{item.question}</span>
            <select
                bind:value={item.answer}
                on:change={(e) => {
                    answers[qid] = e.target.value;
                }}
            >
                {#each item.options as a, i}
                    <option value={i}> {a} </option>
                {/each}
            </select>
        </div>
    {/each}
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .item {
        display: flex;
        flex-direction: column;
        margin-bottom: 8px;
        gap: 7px;
    }
</style>
