<template>
  <footer
    id="app-footer"
    class="container"
  >
    <div class="try-rodin">
      <div class="try-rodin-content">
        <h2 class="font-800">
          Try Rodin
        </h2>
        <br>
        <p class="font-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <request-demo
        class="request-demo"
        background-color="#1B134C"
        border-gradient="radial-gradient(circle at top left, #3B72FF 42.58%, #6C23F5 109.64%)"
      />
    </div>
    <div class="footer-content grid grid-cols-4">
      <div class="footer-block">
        <h6 class="uppercase block-title font-600">
          {{ $t(`button['solutions']`) }}
        </h6>
        <span
          v-for="(solution, index) in solutions"
          :key="index"
          class="block-info"
        >{{ $t(`solutions['${solution.title}']`) }}</span>
      </div>
      <div class="footer-block">
        <h6 class="uppercase block-title font-600">
          {{ $t(`button['services']`) }}
        </h6>
        <span
          v-for="(service, index) in services"
          :key="index"
          class="block-info"
        >{{ $t(`title['${service.title}']`) }}</span>
      </div>
      <div class="footer-block">
        <h6 class="uppercase block-title font-600">
          {{ $t(`footer['help center']`) }}
        </h6>
        <span
          v-for="(help, index) in helpCenter"
          :key="index"
          class="block-info"
        >{{ $t(`footer['${help.title}']`) }}</span>
      </div>
      <div class="footer-block">
        <h6 class="uppercase block-title font-600 smart-nations">
          {{ $t(`button['Smart Nation, Group 42']`) }}
        </h6>
        <span
          v-for="(contact, index) in contacts"
          :key="index"
          class="block-info"
        >
          <img
            class="contact-us-icon"
            :src="contact.icon"
            :alt="contact.title"
          > {{ contact.title }}
        </span>
        <div class="email-use">
          <label
            for="email"
            class="block-info"
          >{{ $t(`footer['Leave your email to set up a call.']`) }}</label>
          <div class="input-container">
            <input
              type="text"
              name="email"
              class="form-input"
              placeholder="Email Address"
            >
            <img
              :src="svg.send"
              alt="send email"
              class="input-icon"
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import RequestDemo from '@/views/components/RequestDemo/Index.vue';
import phone from '@/assets/images/icons/phone-call.svg';
import envelope from '@/assets/images/icons/envelope.svg';
import pin from '@/assets/images/icons/pin.svg';
import send from '@/assets/images/icons/send.svg';

export default {
  components: {
    RequestDemo,
  },
  computed: {
    svg() {
      return { send };
    },
    solutions() {
      return [
        { url: '', title: 'financial services' },
        { url: '', title: 'media and entertainment' },
        { url: '', title: 'education' },
        { url: '', title: 'healthcare' },
      ];
    },
    services() {
      return [
        { url: '', title: 'Natural Language Processing' },
        { url: '', title: 'Audio and Speech Analysis' },
        { url: '', title: 'Machine Translation' },
        { url: '', title: 'Video Content Analysis' },
        { url: '', title: 'Automatic Image Understanding' },
      ];
    },
    helpCenter() {
      return [
        { url: '', title: 'contact us' },
        { url: '', title: 'user guide' },
        { url: '', title: 'pricing' },
        { url: '', title: 'terms of use' },
        { url: '', title: 'privacy policy' },
      ];
    },
    contacts() {
      return [
        { icon: phone, title: '+971 50 123456' },
        { icon: envelope, title: 'info@rodin.com' },
        { icon: pin, title: '1234 Dubai, Marina' },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
#app-footer {
  display: flex;
  flex-direction: column;
  border-top: 1px solid #D3D3D3;
  padding-top: 0.3rem;
  padding-bottom: 0.12rem;
  background: #1B134C;
  color: white;
  font-family: Montserrat;

  .try-rodin {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 0.24rem;
    border-bottom: 1px solid #FFFFFF20;

    .try-rodin-content {
      width: 42%;
    }

    .request-demo {
      padding-top: 0.2rem;
    }
  }

  .footer-content {
    gap: 0.12rem;
    padding: 0.6rem 0;
    border-bottom: $border-white-faded;

    .footer-block {
      display: flex;
      flex-direction: column;
      gap: 0.1rem;
    }

    .block-title {
      margin-bottom: 0.16rem;
      color: #FFFFFF60
    }

    .block-info {
      @include typography-description;
      color: #FFFFFF80;
    }

    .smart-nations {
      color: #FFFFFF
    }

    .contact-us-icon {
      margin-right: 0.12rem;
    }

    .email-use {
      margin-top: 0.32rem;
      > .block-info {
        color: white;
      }

      .input-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
        margin-top: 0.08rem;

        input {
          padding-right: 0.6rem;
          color: #FFFFFF50
        }

        .input-icon {
          position: absolute;
          right: 0.2rem;
        }
      }
    }
  }
}
</style>
