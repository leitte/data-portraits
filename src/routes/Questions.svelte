<script>
    import { questionaire } from "./stores";

    let answers = new Array($questionaire.length).fill(-1);
</script>

<form>
    {#each $questionaire as item, qid }
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
    {/each}
</form>

{#key answers}
    <div class="list">
        {#each $questionaire as q}
            <span>{q.question} {q.answer}</span>
        {/each}

        <span>{answers}</span>
    </div>
{/key}

<style>
    form {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .list {
        display: flex;
        flex-direction: column;
    }
</style>
