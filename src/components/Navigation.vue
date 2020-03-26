<template>
    <div id="nav">
        <div class="header container">
            <div class="hamburger" @click="show = !show">
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
                    <path d="M17.7 8.23333C17.7 12.4584 13.8979 15.9667 9.1 15.9667C4.30209 15.9667 0.5 12.4584 0.5 8.23333C0.5 4.00824 4.30209 0.5 9.1 0.5C13.8979 0.5 17.7 4.00824 17.7 8.23333Z" stroke="black"/>
                    <line y1="-0.5" x2="7.5519" y2="-0.5" transform="matrix(0.741536 0.670913 -0.741536 0.670913 15.4 13.9333)" stroke="black"/>
                </svg>
            </div>
            <div class="cart">
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1.34189H2M5.52566 13L1.52566 1M17 13.3419H5M20.4569 4.04496L16.4569 13.045M20 4.34189H3" stroke="black"/>
                    <circle cx="15" cy="17.8419" r="1.5" stroke="black"/>
                    <circle cx="8" cy="17.8419" r="1.5" stroke="black"/>
                </svg>
            </div>
            <form class="search" action="" method="">
                <div class="nested search-template">
                    <input class="search-input" type="text" name="" id="">
                    <button class="search-input">
                        <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.7 8.23333C17.7 12.4584 13.8979 15.9667 9.1 15.9667C4.30209 15.9667 0.5 12.4584 0.5 8.23333C0.5 4.00824 4.30209 0.5 9.1 0.5C13.8979 0.5 17.7 4.00824 17.7 8.23333Z" stroke="white"/>
                            <line y1="-0.5" x2="7.5519" y2="-0.5" transform="matrix(0.741536 0.670913 -0.741536 0.670913 15.4 13.9333)" stroke="white"/>
                        </svg>
                    </button>
                </div>
            </form>
        </div>
        <transition name="slide">
            <div class="menu" v-if="show">
                <!-- Router Links -->
                <div class="menu-item">
                    <router-link to="/">Home</router-link>
                </div>
                <div class="menu-item">
                    <router-link to="/information">Information</router-link>
                </div>
                <div class="menu-item">
                    <router-link to="/testimonies">Testimonies</router-link>
                </div>
                <div class="menu-item">
                    <router-link to="/health">Health</router-link>
                </div>
                <div class="menu-item">
                    <router-link to="/essential-oils">Essential Oils</router-link>
                </div>
                <div class="menu-item">
                    <router-link to="/shop">Shop</router-link>
                </div>
                <div class="menu-item">
                    <router-link to="/research">Research</router-link>
                </div>
                <div class="menu-item">
                    <router-link to="/contact">Contact Us</router-link>
                </div>
                <div class="menu-item">
                    <router-link to="/product">Product</router-link>
                </div>
                <div class="menu-item">
                    <router-link to="/login">Login</router-link>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Navigation',
    data: function() {
        return {
            show: false
        }
    }
}
</script>

<style scoped>
/* Grid Level */
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr 3fr 1fr 1fr;
        grid-template-rows: 53px 53px;
        align-items: center;
    }
    .nested {
        display: grid;
    }
    .search-template {
        grid-template-columns: 1fr 3fr 40px 1fr;
    }

/* Item Level */
    /* Header */
        .search {
            height: 53px;
            grid-column: 1 / 6;
        }
        .search input {
            border: none;
            background-color: #F8F8F8;
            grid-column: 2 / 3;
        }
        .search input:hover {
            border: none;
            background-color: #F8F8F8;
            box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
        }
        .search button {
            height: 40px;
            width: 40px;
            background-color: #565458;
            border: none;
            border-radius: 2px;
        }
        .search button:hover {
            height: 40px;
            width: 40px;
            box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
            border-radius: 2px;
        }
    /* Menu */
        .menu {
            width: 100%;
            position: absolute;
            background-color: white;
        }

/* Animations */
    /* Slide menu bar */
        .slide-enter-active {
            transition: opacity .3s ease-in-out, transform .3s ease-in-out;
        }

        .slide-leave-active {
            transition: opacity .3s ease-out, transform .3s ease-in-out;
        }

        .slide-enter, .slide-leave-to {
            transform: translateX(-100%);
            opacity: 0;
        }
</style>