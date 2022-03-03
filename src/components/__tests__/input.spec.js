import { shallowMount } from "@vue/test-utils";
import input from "@/components/input/index.vue"

describe('PUBLIC', () => {
    test('TESTE 01', () => {
        const wrapper = shallowMount(input);

        expect(wrapper.contains('input')).toBe(true);
    });
});