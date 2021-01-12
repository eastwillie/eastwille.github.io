<template>
    <div id="home-page">
        <div class="rodin">
            <div class="content">
                <div class="labels-container">
                    <span class="perception">Perception & Cloud Powered</span>
                    <span class="all-stack">All-Stack AI Service Platform</span>
                    <span class="empowering">Empowering Intelligent Apps with Our Customizable AI Technology</span>
                </div>
                <div class="rodin-actions">
                    <button class="btn-action demo">Request Demo</button>
                    <button class="btn-action check">Check our services</button>
                </div>
                <div class="rodin-stats">
                    <div class="stat">
                        <span class="count">50+</span>
                        <span class="count-description">AI Services Covering</span>
                    </div>
                    <div class="stat">
                        <span class="count">5</span>
                        <span class="count-description">Major AI Domains</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="vision content">
            <div class="introduction">
                <div class="introduction-heading"><img :src="quote" alt=""> Introduction to Rodin</div>
                <div class="introduction-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolorum quo autem blanditiis quasi nobis a cumque necessitatibus, vel eaque libero molestiae quidem sint aspernatur beatae explicabo qui, vero corporis? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi necessitatibus reiciendis ex deleniti quibusdam labore quo praesentium architecto minus error vitae voluptas, saepe aliquid quas, ad veritatis perferendis at laborum.</div>
            </div>
        </div>
    </div>
</template>
<script>
import quote from '@/assets/images/quote.svg';

export default {
    computed: {
        quote() {
            return quote;
        },
    },
    mounted() {
        this.$methods.methodsExample();
    },
};
</script>
<style lang="scss" scoped>
    #home-page {
        display: flex;
        flex-direction: column;
        font-family: 'Montserrat';
        background: #F7F8FF;

        .content {
            display: flex;
            flex-direction: column;
            padding: 0 0.85rem;
        }

        .rodin {
            display: flex;
            position: relative;
            flex-direction: row;
            width: 100vw;
            height: calc(100vh - 61px); // had to use px - due to Element UI's component used px
            padding-top: 2.4rem;
            background: linear-gradient(339.91deg, #33029B -2.33%, #1A124B 98.52%);
            color: white;

            .labels-container {
                display: flex;
                flex-direction: column;

                .perception {
                    text-transform: uppercase;
                    font-weight: 400;
                    font-size: 0.24rem;
                    line-height: 0.30rem;
                }

                .all-stack {
                    margin-top: 0.12rem;
                    text-transform: uppercase;
                    font-weight: 700;
                    font-size: 0.36rem;
                }

                .empowering {
                    margin-top: 0.12rem;
                    font-size: 0.18rem;
                }
            }

            .rodin-actions {
                margin-top: 0.4rem;
                display: flex;
                gap: 0.1rem;

                .btn-action {
                    height: 0.6rem;
                    font-family: 'Montserrat';
                    font-size: 0.18rem;
                    color: white;
                    border-radius: 6px;
                    border: none;
                }

                .demo {
                    width: 2rem;
                    background: linear-gradient(100.62deg, #3A71FF 48.27%, rgba(121, 58, 255, 0) 203.77%);
                }

                .check {
                    width: 2.46rem;
                    background: transparent;
                    border: 0.5px solid #FFFFFF;
                    box-sizing: border-box;
                }
            }
        }

        .brain {
            position: absolute;
            width: 321.5px;
            height: 273px;
            left: 907px;
            top: 94px;
            background: linear-gradient(0deg, rgba(156, 124, 249, 0.44) -13.55%, rgba(36, 12, 106, 0) 100%);
        }

        .rodin-stats {
            display: flex;
            margin-top: 0.4rem;

            .stat {
                display: flex;
                flex-direction: column;
                border-left: 1px solid white;
                padding-left: 0.2rem;
                margin-right: 0.24rem;

                .count {
                    font-size: 0.32rem;
                    font-weight: 900;
                }

                .count-description {
                    font-size: 0.20rem;
                }
            }
        }

        .introduction {
            width: 100%;
            height: 2.22rem;
            margin-top: -0.6rem;
            background-color: white;
            border-radius: 0.06rem;
            padding: 0.4rem;
            padding-top: 0.30rem;

            .introduction-heading {
                font-size: 0.28rem;
            }

            .introduction-description {
                margin-top: 0.24rem;
                font-size: 0.16rem;
            }
        }

        .vision {
            display: flex;
            position: relative;
            width: 100vw;
            height: 100vh;
        }
    }
</style>
