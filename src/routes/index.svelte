<h1>Status Pages</h1>

<div class="cards">
    { #each sites as site}
        <Card site={site}/>
    { /each }
</div>

<script lang="ts">
    import sites from '../sites'
    import Card from '../components/card.svelte'
</script>

<style>
    h1 {
        width: 100%;
        text-align: center;
        font-weight: 500;
    }
    .cards {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
    }

    div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>
