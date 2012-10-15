//
//  TiUISwitch+WithTint.m
//  tintswitch
//
//  Created by David Bankier on 15/10/12.
//
//

#import "TiUISwitch+WithTint.h"
@interface TiUISwitch()
-(UISwitch*)switchView;
@end

@implementation TiUISwitch (WithTint)

-(void)setTint_:(id)args
{
    TiColor * tintColor = [TiUtils colorValue:args];
    [[self switchView] setOnTintColor: [tintColor color]];
}
@end
