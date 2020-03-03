<template>
    <div id="nav">
        <div class="hamburger-menu">
            <button class="burger" data-state="closed">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
        <ul>
            <li>
            <router-link to="/">Home</router-link>
            </li>
            <li>
            <router-link to="/information">Information</router-link>
            </li>
            <li>
            <router-link to="/testimonies">Testimonies</router-link>
            </li>
            <li>
            <router-link to="/health">Health</router-link>
            </li>
            <li>
            <router-link to="/essential-oils">Essential Oils</router-link>
            </li>
            <li>
            <router-link to="/shop">Shop</router-link>
            </li>
            <li>
            <router-link to="/research">Research</router-link>
            </li>
            <li>
            <router-link to="/contact">Contact Us</router-link>
            </li>
            <li>
            <router-link to="/product">Product</router-link>
            </li>
            <li>
            <router-link to="/login">Login</router-link>
            </li>
        </ul>
        <!-- <router-link to="/">Home</router-link> | -->
        <!-- <router-link to="/information">Information</router-link> | -->
        <!-- <router-link to="/testimonies">Testimonies</router-link> | -->
        <!-- <router-link to="/health">Health</router-link> | -->
        <!-- <router-link to="/essential-oils">Essential Oils</router-link> | -->
        <!-- <router-link to="/shop">Shop</router-link> | -->
        <!-- <router-link to="/research">Research</router-link> | -->
        <!-- <router-link to="/contact">Contact Us</router-link> | -->
        <!-- <router-link to="/product">Product</router-link> | -->
        <!-- <router-link to="/login">Login</router-link> -->
    </div>
</template>

<script>
export default {
    name: 'Navigation'
}
</script>