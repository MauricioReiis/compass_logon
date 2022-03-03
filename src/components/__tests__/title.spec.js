import { shallowMount } from "@vue/test-utils";
import title from "@/components/title/index.vue"

describe('PUBLIC', () => {
    test('TESTE 01', () => {
        const wrapper = shallowMount(title);

        expect(wrapper.contains('div')).toBe(true);
    });
});