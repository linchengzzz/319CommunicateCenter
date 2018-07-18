<template>
    <div class="about">
        <Test></Test>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
const Test = () => import('@/components/Test.vue');
const validate = (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
): void => {
    const method = descriptor.value;
    console.log(descriptor);
    descriptor.value = function(newValue: string) {
        if (!newValue) {
            throw Error('name is invalid');
        } else {
            method.call(this, newValue);
        }
    };
};
const god = (name: string) => {
    console.log(`god(): evaluated ${name}`);
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log('god(): called');
    };
};
@Component({
    components: {
        Test
    }
})
export default class About extends Vue {
    mounted(): void {
        class User {
            @god('test')
            test() {
                console.log(1);
            }
        }
    }
}
</script>
