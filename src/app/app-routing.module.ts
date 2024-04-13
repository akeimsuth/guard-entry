import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',  
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'pre-approve-entry',
    loadChildren: () => import('./pre-approve-entry/pre-approve-entry.module').then( m => m.PreApproveEntryPageModule)
  },
  {
    path: 'in-out',
    loadChildren: () => import('./in-out/in-out.module').then( m => m.InOutPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'new-message',
    loadChildren: () => import('./new-message/new-message.module').then( m => m.NewMessagePageModule)
  },
  {
    path: 'recent-messages',
    loadChildren: () => import('./recent-messages/recent-messages.module').then( m => m.RecentMessagesPageModule)
  },
  {
    path: 'get-support',
    loadChildren: () => import('./get-support/get-support.module').then( m => m.GetSupportPageModule)
  },
  {
    path: 'terms-conditions',
    loadChildren: () => import('./terms-conditions/terms-conditions.module').then( m => m.TermsConditionsPageModule)
  },
  {
    path: 'change-language',
    loadChildren: () => import('./change-language/change-language.module').then( m => m.ChangeLanguagePageModule)
  },
  {
    path: 'vt-popup',
    loadChildren: () => import('./vt-popup/vt-popup.module').then( m => m.VtPopupPageModule)
  },
  {
    path: 'buyappalert',
    loadChildren: () => import('./buyappalert/buyappalert.module').then( m => m.BuyappalertPageModule)
  },
  {
    path: 'add-guest-entry',
    loadChildren: () => import('./add-guest-entry/add-guest-entry.module').then( m => m.AddGuestEntryPageModule)
  },
  {
    path: 'add-deliveryman-entry',
    loadChildren: () => import('./add-deliveryman-entry/add-deliveryman-entry.module').then( m => m.AddDeliverymanEntryPageModule)
  },
  {
    path: 'add-serviceman-entry',
    loadChildren: () => import('./add-serviceman-entry/add-serviceman-entry.module').then( m => m.AddServicemanEntryPageModule)
  },
  {
    path: 'add-cab-entry',
    loadChildren: () => import('./add-cab-entry/add-cab-entry.module').then( m => m.AddCabEntryPageModule)
  },
  {
    path: 'guest-entry-send-notification',
    loadChildren: () => import('./guest-entry-send-notification/guest-entry-send-notification.module').then( m => m.GuestEntrySendNotificationPageModule)
  },
  {
    path: 'deliveryman-entry-send-notification',
    loadChildren: () => import('./deliveryman-entry-send-notification/deliveryman-entry-send-notification.module').then( m => m.DeliverymanEntrySendNotificationPageModule)
  },
  {
    path: 'serviceman-entry-send-notification',
    loadChildren: () => import('./serviceman-entry-send-notification/serviceman-entry-send-notification.module').then( m => m.ServicemanEntrySendNotificationPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./verification/verification.module').then( m => m.VerificationPageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./my-profile/my-profile.module').then( m => m.MyProfilePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
