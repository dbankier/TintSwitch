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

-(void)setOnTint_:(id)args
{
    TiColor * tintColor = [TiUtils colorValue:args];
    [[self switchView] setOnTintColor: [tintColor color]];
}

-(void)setOffTint_:(id)args
{
    TiColor * tintColor = [TiUtils colorValue:args];
    [[self switchView] setTintColor: [tintColor color]];
}

-(void)setThumbTint_:(id)args
{
    TiColor * tintColor = [TiUtils colorValue:args];
    [[self switchView] setThumbTintColor: [tintColor color]];
}

-(void)setOnImage_:(id)args
{
    [[self switchView] setOnImage:[TiUtils toImage:args proxy: self.proxy]];
}

-(void)setOffImage_:(id)args
{
    [[self switchView] setOffImage:[TiUtils toImage:args proxy: self.proxy]];
}

@end
