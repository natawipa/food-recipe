<script>
    import Nav from "../components/Nav.svelte";
    import Footer from "../components/Footer.svelte";
    import "../app.css";
    
</script>

<Nav/>

<div class = "flex min-h-96">
    <div class = "m-auto">
        <slot></slot>
    </div>
</div>

<Footer/>