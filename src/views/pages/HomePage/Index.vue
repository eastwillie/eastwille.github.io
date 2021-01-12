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
            </div>
        </div>
    </div>
</template>
<script>
export default {
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

        .rodin {
            display: flex;
            position: relative;
            flex-direction: row;
            width: 100vw;
            height: calc(100vh - 61px); // had to use px - due to Element UI's component used px
            background: linear-gradient(339.91deg, #33029B -2.33%, #1A124B 98.52%);
            color: white;

            .content {
                display: flex;
                flex-direction: column;
                padding-top: 2.4rem;
                padding-left: .85rem;

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
        }
    }
</style>
