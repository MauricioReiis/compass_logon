import { shallowMount } from "@vue/test-utils";
import weather from "@/components/weather/index.vue"

describe('PUBLIC', () => {
    test('TESTE 01', () => {
        const wrapper = shallowMount(weather);

        expect(wrapper.contains('div')).toBe(true);
    });
});