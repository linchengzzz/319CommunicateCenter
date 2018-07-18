<template>
    <div>
        <input type="text" v-model="text">
        <p>name：{{name}} </p>
        <p>username：{{user.username}}</p>
        <Toast></Toast>
    </div>
</template>

<script lang='ts'>
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import { State, Getter, Action, Mutation } from 'vuex-class';
import { User } from '../store/interface';
import * as Types from '@/store/types';

const Toast = () => import('@/components/Toast.vue');

@Component({
    components: {
        Toast
    }
})
export default class Demo extends Vue {
    public title: string = 'my';
    public text: string = '';

    @Prop({
        default: ''
    })
    value?: string;

    @State user;
    @Getter userName;
    @Action setId;
    @Mutation(Types.SET_USER_NAME) setUserName;

    get name(): string {
        return this.title + this.onChangeText();
    }

    @Watch('text')
    onChangeText(): string {
        return this.text + 'xl';
    }

    mounted() {
        this.setId(0);
        this.setUserName('default');
    }
}
</script>

<style scoped lang='less'>
</style>