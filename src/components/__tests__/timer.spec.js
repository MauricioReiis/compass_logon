import { shallowMount } from "@vue/test-utils";
import timer from "@/components/timer/index.vue"

describe('PUBLIC', () => {
    test('TESTE 01', () => {
        const wrapper = shallowMount(timer);

        expect(wrapper.contains('div')).toBe(true);
    });
});