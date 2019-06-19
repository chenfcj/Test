<template>
  <view class="calendar">
    <ss-calendar :checks="checks" />
		<view class="btn-sign-in" @click="signIn">签到</view>
  </view>
</template>

<script>
  import ssCalendar from '@/components/ss-calendar/ss-calendar.vue'
  export default {
    data() {
      return {
        checks: []
      };
    },
    components: {
      ssCalendar
    },
    methods: {
      signIn() {
        const day = new Date().getDate()
        this.checks.push(day)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .calendar {
    .btn-sign-in {
      width: 240upx;
      height: 70upx;
      line-height: 70upx;
      text-align: center;
      border: 2upx solid #ddd;
      border-radius: 43upx;
      margin: 0 auto;
      font-size: 32upx;
			background: #48C23D;
    }
  }
</style>
