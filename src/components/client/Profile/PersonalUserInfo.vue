<template>
    <div class="profile-personal-info-block">
        <div class="">
            <div class="name">
                {{user.name}}
            </div>
            <div class="info">
                <div class="info-row">
                    <div class="label">
                        Birthday:
                    </div>
                    <div class="data">
                        April 9, 1996
                    </div>
                </div>
                <div class="info-row">
                    <div class="label">
                        Current city:
                    </div>
                    <div class="data">
                        Plovdiv
                    </div>
                </div>
                <div class="info-row">
                    <div class="label">
                        University:
                    </div>
                    <div class="data">
                        Plovdiv University
                    </div>
                </div>
            </div>
            <div v-show="showFullInfo" class="info extra-info">
                <div class="info-row heading">
                    <div class="label">
                        Personal information:
                    </div>
                </div>
                 <div class="info-row">
                    <div class="label">
                        Interests:
                    </div>
                    <div class="data">
                        Reading, Sport, Swimming
                    </div>
                </div>
                <div class="info-row heading">
                    <div class="label">
                        Eductation:
                    </div>
                </div>
                 <div class="info-row">
                    <div class="label">
                        University:
                    </div>
                    <div class="data">
                        PU 15-20
                    </div>
                </div>
            </div>
            <div class="info">
                <div class="info-row">
                    <button @click="toggleMoreInfo($event)"
                            class="btn btn-light-primary d-block w-100">
                        <span v-show="showFullInfo">Show less</span>
                        <span v-show="!showFullInfo">Show full info</span>
                    </button>
                </div>
                <div class="info-row mt-1">
                    <button v-if="isThisMe" class="btn btn-light-primary d-block w-100">
                        <span>Edit profile</span>
                    </button>
                </div>
            </div>
            <div class="profile-stats">
                <ul>
                    <li><span>6</span>friends</li>
                    <li><span>10</span>images</li>
                    <li><span>4</span>files</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['user'],
  name: 'PersonalUserInfo',
  data() {
    return {
      showFullInfo: false,
    };
  },
  methods: {
    toggleMoreInfo(e) {
      this.showFullInfo = !this.showFullInfo;
      console.log(e.target);
    },
  },
  computed: {
    isThisMe() {
      return this.user.name === 'me';
    },
  },
};
</script>
