<template>
  <div id="ai-services_nlp_document-classification">
    <service-template>
      <template v-slot:header>
        {{ $t('services.documentClassification.header') }}
      </template>
      <template v-slot:subheader>
        {{ $t('services.documentClassification.subheader') }}
      </template>
      <template v-slot:left>
        <input-language
          :items="languages"
          :current-language.sync="currentLanguage"
          :loading="loading"
        />
        <example-text
          :items="textExamples"
          :current-example.sync="currentExample"
          :loading="loading"
        />
        <run-button
          :on-click="run"
          :loading="loading"
        />
      </template>
      <template v-slot:right>
        <generated-result
          :service-name="$t('services.documentClassification.header')"
          :loading="loading"
        >
          <div
            v-if="result.length"
            class="result"
          >
            {{ result }}
          </div>
        </generated-result>
      </template>
    </service-template>
  </div>
</template>
<script>
import ServiceTemplate from '@/views/components/Services/ServiceTemplate/Index.vue';
import InputLanguage from '@/views/components/Services/InputLanguage/Index.vue';
import GeneratedResult from '@/views/components/Services/GeneratedResult/Index.vue';
import RunButton from '@/views/components/Services/RunButton/Index.vue';
import ExampleText from '@/views/components/Services/ExampleText/Index.vue';

export default {
  name: 'DocumentClassification',
  components: {
    ExampleText,
    RunButton,
    GeneratedResult,
    InputLanguage,
    ServiceTemplate,
  },
  data: () => ({
    availableLanguages: ['en', 'ar'],
    currentLanguage: 'en',
    examples: [
      'As Pope Benedict sat down with the German journalist Peter Seewald at the papacy\'s summer residence a few months ago, he probably never imagined that his cautious remarks on condoms would spark international excitement. He appears to be constantly surprised that his ruminations should be noticed.Benedict reiterated the Catholic church\'s longstanding and dogmatic opposition to artificial birth control, which remains a grave sin â€“ though honoured rather more in the breach than the observance by many of the faithful, certainly in the western world. And, as some Catholic theologians and even several cardinals â€“ including the former archbishop of Westminster, Cardinal Cormac Murphy-O\'Connor â€“ have argued in recent years, using a condom to prevent a greater evil, the passing on of a lethal virus, may be licit.But it is the implication of his statement â€“ and the fact that the pope has made it himself â€“ that changes things.   In certain cases, where the intention is to reduce the risk of infection, [condom use] can nevertheless be a first step on the way to another, more humane, sexuality,   he said, adding:   There may be justified individual cases, for example when a male prostitute uses a condom.  For more than 40 years the church hierarchy has tied itself up in rhetorical knots to justify the encyclical Humanae Vitae of 1968, in which Pope Paul VI overturned the advice of his own papal commission to restate the church\'s opposition to any artificial birth control.Now, suddenly and maybe grudgingly, Benedict has acknowledged the weight of pragmatic advice and implicitly accepted the medical case that condoms do indeed help to prevent the spread of infection. He even seems to recognise, by the term male prostitute, that people who in his terms should not be having sex at all do so, and therefore need protection, especially if ultimately it helps them see the light.Welcome â€“ marginally â€“ to the real world. Cardinal Alfonso LÃ³pez Trujillo, who claimed in 2003 that the Aids virus could percolate through little holes in condoms that only he could see, must be turning in his grave. Benedict sidelined Trujillo when he became pope, so perhaps he always had doubts about the Colombian\'s credibility.The church\'s position on sex has long contained doses of hypocrisy. Even in times of mass religious observance, it has been well aware that its rules have been flouted or ignored. You can dress it up as the dictates of conscience, or pragmatism, or even human sinfulness, but women have always attempted to practise birth control or, if that failed, risked abortions.A recent US survey found 40% of women seeking abortions were Catholic (and a further 40% belonged to other religious groups) â€“ proportions that have probably scarcely altered, despite all the condemnation, since the mid-19th century, when one in six pregnancies in the US are thought to have been aborted. Even the rhythm method, or natural family planning as the church calls it, is a form of birth control, in that it attempts to avoid procreation.Perhaps lapsed Catholics like me should welcome the pope\'s shuffle. At least it starts to undermine one of the Vatican\'s least intellectually coherent positions: the thin end of a very long wedge. If this can change, what else might follow, if not under this ageing pontiff then his successor? We already have some married priests, converted from Anglicanism. What if the next pope, in response to a divine revelation to answer the shortage of vocations, decided that women could be ordained too? Where would Church of England refugees be then?',
      'Europe  Greece:  Two weeks\' windsurfing tuition on Kos in October costs £120pp. Seven nights\' accommodation starts from £219pp based on three sharing self-catering apartments. Flights included. Argo Holidays 020-7331 7070.   North America  US: Experience New England in the Fall. The five-day Mountain Foliage Getaway coach tour begins in Boston, and follows a seasonal trail through the striking villages of Vermont and the White Mountain National Forest in New Hampshire. Departing on September 10, the tour costs £959pp. Osprey Holidays 08705 605 605.  US:  Three-night Christmas shopping break to Boston from November 1 to December 14 for £305pp, including flights and accommodation. Cheapflights.com  Asia  India:  Enjoy a tour of the real Rajasthan and the medieval walled city of Jaisalmer in the Thar desert. The 13-day tour departs October 20 and costs £1,371pp, including a donation to the fund set up to save Jaisalmer. Price includes scheduled British Airways flights, all domestic flights and transfers and room-only accommodation. Greaves Travel, 020-7487 9111.  Bangkok and Bali: Fourteen nights for £1,049 including return scheduled flights with Garuda International, all transfers and room-only accommodation. For departures between September 1 and November 30. Tradewinds 0870 751 0004.  Middle East  Egypt:  A six-day diving package staying at the Falcon Hills Hotel in Ras Um Sid, November 1 to December 15, costs £499pp. Half-board accommodation and Gatwick return flights included. Discover Red Sea 020-7407 2111.  Israel:  Three-night weekend breaks in Jerusalem from £329 including flights and self-catering accommodation. November onwards. Pullman Holidays 08700 133085.  Cruising  Food:  Thirteen-night cruise aboard the Crystal Symphony from Barbados to Acapulco via the Panama canal with demonstrations by chef Brian Turner. Fly out from UK on November 19. Cost from £2,410pp. Crystal Cruises, 020 7287 9040.  The Galapagos: Fourteen-day trip with 10-day cruise of the islands. Departs September 23. Price from £2,875pp, including international and internal flights, accommodation and expert guides. Discovery Initiatives (01285 810621) Mediterranean:  A seven-night cruise on Sunbird leaves September 23 visiting Palma, Corsica, Rome, Florence, Monte Carlo and Barcelona, costs £649pp including flights from Gatwick or Manchester, transfers, all meals and entertainments. Airtours 08701 577775. This article contains affiliate links, which means we may earn a small commission if a reader clicks through and makes a purchase. All our journalism is independent and is in no way influenced by any advertiser or commercial initiative.',
      'The US film industry\'s annual award season got under way in New York this week with three separate awards announcements.These early awards brought little clarity to the forthcoming Oscars race but they did give some indication of what films might be in the running.Talking Movies\' Tom Brook reports.US film awards season kicks off in New York',
      'Dido Harding, chief executive of TalkTalk, has told the BBC\'s Kamal Ahmed that she has been contacted by an individual or group claiming to be responsible for the hack which stole the data of millions of the company\'s customers.TalkTalk hacker \'looking for money\'\n',
      'Hillary Clinton has won a narrow victory in the Nevada caucuses, the latest stage in the contest for the Democratic Party\'s presidential nomination.She took 52% per cent of the vote, with her rival, Bernie Sanders, just behind on 48%.She told her supporters in Las Vegas  this one\'s for you .Hillary Clinton on Nevada victory: \'This one\'s for you\'\n',
    ],
    currentExample: null,
    result: '',
    loading: false,
  }),
  computed: {
    languages() {
      return this.availableLanguages.map((el) => ({
        id: el,
        name: this.$t(`languages.${el}`),
      }));
    },
    textExamples() {
      return this.examples.map((el, index) => ({
        id: index,
        value: el,
      }));
    },
  },
  methods: {
    run() {
      this.loading = true;
      // Connect to API and wait response here
      // eslint-disable-next-line no-console
      console.log({ language: this.currentLanguage, example: this.currentExample });
      setTimeout(() => {
        this.loading = false;
        this.result = 'I am response from API';
      }, 2000);
    },
  },
};
</script>

<style lang="scss" scoped>
  #ai-services_nlp_document-classification {
    background: $background-secondary;

    .result {
      // Result customization here
      padding: 0.1rem;
      background-color: lightgreen;
    }
  }
</style>
