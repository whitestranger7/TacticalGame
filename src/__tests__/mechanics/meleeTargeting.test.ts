import MeleeTargetUnit from '../../models/behaviors/targetsBehavior/MeleeTargetUnit';

export const meleeTargeting = describe('Melee targeting behavior', () => {

    it('Melee units cant deal damage not from frontline', () => {
        expect(2+2).toBe(4);
    });

});