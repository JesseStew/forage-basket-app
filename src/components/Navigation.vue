<template>
    <div id="nav">
        <div class="container">
            <div class="hamburger">
                <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="-1" x2="24" y2="-1" transform="matrix(-1 0 0 1 24 2)" stroke="black" stroke-width="2"/>
                    <line y1="-1" x2="24" y2="-1" transform="matrix(-1 0 0 1 24 18)" stroke="black" stroke-width="2"/>
                    <line y1="-1" x2="24" y2="-1" transform="matrix(-1 0 0 1 24 10)" stroke="black" stroke-width="2"/>
                </svg>
            </div>
            <div class="location-pin">
                <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 7.5C15.5 12.5 11.5 17.5 8.5 20C5.50003 17.5 1.00003 12.5 1 7.5C1.00003 5.5 3.00003 1 8.5 1C14.1 1 15.5 5.5 15.5 7.5Z" stroke="black"/>
                    <circle cx="8.50003" cy="8.5" r="2.5" stroke="black"/>
                </svg>
            </div>
            <div class="logo">
                Forage Basket
            </div>
            <div class="search-icon">
                <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.7 8.23333C17.7 12.4584 13.8979 15.9667 9.1 15.9667C4.30209 15.9667 0.5 12.4584 0.5 8.23333C0.5 4.00824 4.30209 0.5 9.1 0.5C13.8979 0.5 17.7 4.00824 17.7 8.23333Z" stroke="#565458"/>
                    <line y1="-0.5" x2="7.5519" y2="-0.5" transform="matrix(0.741536 0.670913 -0.741536 0.670913 15.4 13.9333)" stroke="#565458"/>
                </svg>
            </div>
            <div class="cart">
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1.34189H2M5.52566 13L1.52566 1M17 13.3419H5M20.4569 4.04496L16.4569 13.045M20 4.34189H3" stroke="black"/>
                    <circle cx="15" cy="17.8419" r="1.5" stroke="black"/>
                    <circle cx="8" cy="17.8419" r="1.5" stroke="black"/>
                </svg>
            </div>
        </div>
        <div class="search">
            <label for="search"></label>
            <input type="text" id="search" name="search">
            <!-- <input type="submit" value="submit"> -->
        </div>
        
        <!-- <div id="menu"> -->
            <!-- Router Links -->
            <!-- <router-link to="/">Home</router-link>
            <router-link to="/information">Information</router-link>
            <router-link to="/testimonies">Testimonies</router-link>
            <router-link to="/health">Health</router-link>
            <router-link to="/essential-oils">Essential Oils</router-link>
            <router-link to="/shop">Shop</router-link>
            <router-link to="/research">Research</router-link>
            <router-link to="/contact">Contact Us</router-link>
            <router-link to="/product">Product</router-link>
            <router-link to="/login">Login</router-link>
        </div> -->
    </div>
</template>

<script>
export default {
    name: 'Navigation',
    data () {
        return {
            show: false
        }
    }
}
</script>

<style scoped>
    /* Grid Container */
    .container {
        width: 100%;
        height: 53px;
        display: grid;
        grid-template-columns: 1fr 1fr 3fr 1fr 1fr;
        grid-template-rows: 53px;
        /* position: fixed; */
        background-color: white;
        height: 10%;
        justify-items: center;
        align-items: center;
        grid-template-areas: 
            "hamburger location-pin logo search-icon cart"
    }

    /* Grid Items (Left to Right) */
    .hamburger {
        grid-area: hamburger;
    }
    .location-pin {
        grid-area: location-pin;
    }
    .logo {
        grid-area: logo;
    }
    .search-icon {
        grid-area: search-icon;
    }
    .cart {
        grid-area: cart;
    }

    .search input[type=submit] {
        display: inline;
    }
    .search input[type=text] {
        padding:5px; 
        border:2px solid #F8F8F8; 
        border-radius: 5px;
        background-color: #F8F8F8;
        width: 90%;
        height: 40px;
    }

    .search input[type=text]:focus {
        border-color:#333;
    }

    .search input[type=submit] {
        padding:5px 15px; 
        background:#ccc; 
        border:0 none;
        cursor:pointer;
        -webkit-border-radius: 5px;
        border-radius: 5px; 
    }
</style>

<!-- Menu animation -->
<!-- <div id="menu-icon" class="right" @click="show = !show">
    <svg v-if="!show" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line id="line1" x1="12" y1="15" x2="38" y2="15" stroke="#000000" stroke-width="3"/>
        <line id="line2" x1="12" y1="25" x2="38" y2="25" stroke="#000000" stroke-width="3"/>
        <line id="line3" x1="12" y1="35" x2="38" y2="35" stroke="#000000" stroke-width="3"/>
    </svg>
    <svg v-else width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line id="line1" x1="12" y1="16" x2="38" y2="35" stroke="#000000" stroke-width="3"/>
        <line id="line3" x1="12" y1="34.5" x2="38" y2="16" stroke="#000000" stroke-width="3"/>
    </svg>
</div> -->