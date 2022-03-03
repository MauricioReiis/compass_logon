import { shallowMount } from "@vue/test-utils";
import textContent from "@/components/textContent/index.vue"

describe('PUBLIC', () => {
    test('TESTE 01', () => {
        const wrapper = shallowMount(textContent);

        expect(wrapper.contains('p')).toBe(true);
    });
});