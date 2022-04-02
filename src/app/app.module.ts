import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BliingComponent } from './account/bliing/bliing.component';
import { BillingComponent } from './account/billing/billing.component';
import { MyPostsComponent } from './account/my-posts/my-posts.component';
import { NotificationsComponent } from './account/notifications/notifications.component';
import { SubscriptionsComponent } from './account/subscriptions/subscriptions.component';
import { AllComponent } from './account/subscriptions/all/all.component';
import { ActiveComponent } from './account/subscriptions/active/active.component';
import { ExpiredComponent } from './account/subscriptions/expired/expired.component';
import { AttentionRequiredComponent } from './account/subscriptions/attention-required/attention-required.component';
import { ProfileComponent } from './account/profile/profile.component';
import { QuotesComponent } from './account/quotes/quotes.component';
import { AccountComponent } from './account/settings/account/account.component';
import { PrivacyComponent } from './account/settings/privacy/privacy.component';
import { DisplayComponent } from './account/settings/display/display.component';
import { CommentsComponent } from './account/notifications/comments/comments.component';
import { MentionsComponent } from './account/notifications/mentions/mentions.component';
import { PromotionsComponent } from './account/notifications/promotions/promotions.component';
import { VerificationComponent } from './account/verification/verification.component';
import { ActivityComponent } from './wallet/activity/activity.component';
import { AddBankComponent } from './wallet/add-bank/add-bank.component';
import { AddCardComponent } from './wallet/add-card/add-card.component';
import { AddBalanceComponent } from './wallet/add-balance/add-balance.component';
import { BuyCoinsComponent } from './wallet/buy-coins/buy-coins.component';
import { SendComponent } from './wallet/send/send.component';
import { SettleComponent } from './wallet/settle/settle.component';
import { WithdrawComponent } from './wallet/withdraw/withdraw.component';
import { FundingSourcesComponent } from './wallet/funding-sources/funding-sources.component';
import { DiscoverComponent } from './feeds/discover/discover.component';
import { LocalComponent } from './feeds/local/local.component';
import { FollowingComponent } from './feeds/following/following.component';
import { ClassifiedsComponent } from './feeds/classifieds/classifieds.component';
import { NowComponent } from './feeds/classifieds/now/now.component';
import { AppointmentsComponent } from './feeds/classifieds/appointments/appointments.component';
import { HeaderComponent } from './core/header/header.component';
import { HeaderLoggedInComponent } from './core/header-logged-in/header-logged-in.component';
import { FooterComponent } from './core/footer/footer.component';
import { FooterLoggedInComponent } from './core/footer-logged-in/footer-logged-in.component';
import { BlockedComponent } from './lists/blocked/blocked.component';
import { BookmarkedComponent } from './lists/bookmarked/bookmarked.component';
import { CloseFriendsComponent } from './lists/close-friends/close-friends.component';
import { FollowListingComponent } from './lists/follow-listing/follow-listing.component';
import { RestrictedComponent } from './lists/restricted/restricted.component';
import { CallComponent } from './messenger/call/call.component';
import { CallHistoryComponent } from './messenger/call-history/call-history.component';
import { ContactsComponent } from './messenger/contacts/contacts.component';
import { ConversationComponent } from './messenger/conversation/conversation.component';
import { ConversationsComponent } from './messenger/conversations/conversations.component';
import { MessengerComponent } from './messenger/messenger/messenger.component';
import { MessengerSettingsComponent } from './messenger/messenger-settings/messenger-settings.component';
import { NewMessageComponent } from './messenger/new-message/new-message.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AboutComponent } from './pages/about/about.component';
import { HowItWorksComponent } from './pages/how-it-works/how-it-works.component';
import { MembershipsComponent } from './pages/memberships/memberships.component';
import { ContactComponent } from './support/contact/contact.component';
import { PrivayPolicyComponent } from './support/privay-policy/privay-policy.component';
import { PrivacyPolicyComponent } from './support/privacy-policy/privacy-policy.component';
import { SubmitTicketComponent } from './support/submit-ticket/submit-ticket.component';
import { TermsOfUseComponent } from './support/terms-of-use/terms-of-use.component';

@NgModule({
  declarations: [
    AppComponent,
    BliingComponent,
    BillingComponent,
    MyPostsComponent,
    NotificationsComponent,
    SubscriptionsComponent,
    AllComponent,
    ActiveComponent,
    ExpiredComponent,
    AttentionRequiredComponent,
    ProfileComponent,
    QuotesComponent,
    AccountComponent,
    PrivacyComponent,
    DisplayComponent,
    CommentsComponent,
    MentionsComponent,
    PromotionsComponent,
    VerificationComponent,
    ActivityComponent,
    AddBankComponent,
    AddCardComponent,
    AddBalanceComponent,
    BuyCoinsComponent,
    SendComponent,
    SettleComponent,
    WithdrawComponent,
    FundingSourcesComponent,
    DiscoverComponent,
    LocalComponent,
    FollowingComponent,
    ClassifiedsComponent,
    NowComponent,
    AppointmentsComponent,
    HeaderComponent,
    HeaderLoggedInComponent,
    FooterComponent,
    FooterLoggedInComponent,
    BlockedComponent,
    BookmarkedComponent,
    CloseFriendsComponent,
    FollowListingComponent,
    RestrictedComponent,
    CallComponent,
    CallHistoryComponent,
    ContactsComponent,
    ConversationComponent,
    ConversationsComponent,
    MessengerComponent,
    MessengerSettingsComponent,
    NewMessageComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    HowItWorksComponent,
    MembershipsComponent,
    ContactComponent,
    PrivayPolicyComponent,
    PrivacyPolicyComponent,
    SubmitTicketComponent,
    TermsOfUseComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
