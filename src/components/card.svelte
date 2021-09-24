
<div>
    <p class="name">{site.name}</p>  
    <p>{status}</p>
    <a href={site.sources.statusPageUrl} target="blank">Go to status page</a>
</div>

<script lang="ts">
    export let site: any
    let status = ''

    fetch(site.sources.publicApi.status)
        .then((res) => res.json())
        .then(data => status = data.status.description)
        .catch(e => console.log(e))

</script>

<style>
    div {
        min-width: 150px;
        min-height: 150px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: 20px;
        border-radius: 15px;
        -webkit-box-shadow: 0px 1px 5px -2px #000000; 
        box-shadow: 0px 1px 5px -2px #000000;
        padding: 15px;
    }

    a {
        text-align: center;
    }

    .name {
        font-weight: bold;
    }
    p {
        width: 100%;
        text-align: center;
    }
</style>
