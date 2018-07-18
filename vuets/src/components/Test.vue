<template>
  <div class="test">
    <input type="text" v-model="ipt">
    <br> {{fullName}}
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Test extends Vue {
    optionalArray?: Array<string>;
    optionalBool?: boolean;
    optionalFunc?: (foo: string, bar: number) => boolean;
    requireFunc?: () => void;
    public ipt: string = '456';
    get fullName(): string {
        return this.ipt + 'zcl';
    }
}
</script>

<style scoped lang='less'>
.test {
    width: 200px;
    height: 200px;
    background: #ccc;
}
</style>
