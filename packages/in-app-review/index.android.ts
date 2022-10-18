import { InAppReviewBase, InAppReviewCommon, InAppReviewConfigs, defaultConfigs } from './common';
import * as application from '@nativescript/core/application';
import { Application, Utils } from '@nativescript/core';

declare const com: any;
// declare const reviewManagerTest: com.google.android.play.core.review.testing.FakeReviewManager;
// declare const reviewManager: com.google.android.play.core.review.ReviewManager;

let _inAppReviewer: com.mastergui.reviews.InAppReviewManager;
let _inAppReviewerKT: org.mastergui.reviews.InAppReview;

function getInAppReviewer(): Promise<com.mastergui.reviews.InAppReviewManager> {
  return new Promise<com.mastergui.reviews.InAppReviewManager>((resolve, reject) => {
    if (_inAppReviewer) {
      console.log('Check');
      return resolve(_inAppReviewer);
    } else {
      const onLaunch = () => {
        application.off(application.launchEvent, onLaunch);
        _inAppReviewer = com.mastergui.reviews.InAppReview.with(application.android.context);
        return resolve(_inAppReviewer);
      };
      console.log('>> Getting In app reviewer...');
      console.log(_inAppReviewer);
      application.on(application.launchEvent, onLaunch);
    }
  });
}

export const inAppReviewer: InAppReviewBase = {
  init(configs?: InAppReviewConfigs) {
    getInAppReviewer().then((reviewer) => {
      const _configs = Object.assign({}, defaultConfigs, configs);
      inAppReviewer.android = reviewer;
      console.log('>> Configuring In app reviewer...');
      console.log(typeof reviewer);
      reviewer.setInstallDays(_configs.daysUntilPrompt);
      reviewer.setLaunchTimes(_configs.usesUntilPrompt);
      reviewer.setRemindInterval(_configs.daysBeforeReminding);
      // reviewer.setShowLaterButton(_configs.showLaterButton);
      // reviewer.setShowNeverButton(_configs.showNeverButton);
      reviewer.monitor();
    });
  },
  incrementSignificantUsageCount: function (): void {
    throw new Error('Function not implemented.');
  },
  showRateDialogIfMeetsConditions: function (): boolean {
    throw new Error('Function not implemented.');
  },
  showRateDialog: function (): void {
    console.log('Chick');
    com.mastergui.reviews.InAppReview.with(Utils.android.getApplication());
  },
  setDaysUntilPrompt: function (days: number): InAppReviewBase {
    throw new Error('Function not implemented.');
  },
  setUsesUntilPrompt: function (uses: number): InAppReviewBase {
    throw new Error('Function not implemented.');
  },
  setSignificantUsesUntilPrompt: function (uses: number): InAppReviewBase {
    throw new Error('Function not implemented.');
  },
  setDaysBeforeReminding: function (days: number): InAppReviewBase {
    throw new Error('Function not implemented.');
  },
  setDebugMode: function (debug: boolean): InAppReviewBase {
    throw new Error('Function not implemented.');
  },
  setShowLaterButton: function (value: boolean): InAppReviewBase {
    throw new Error('Function not implemented.');
  },
  setShowNeverButton: function (value: boolean): InAppReviewBase {
    throw new Error('Function not implemented.');
  },
  getKotlinReviewInfo: function (): void {
    console.log('Yes');
  },
  getReviewInfo: function (): void {
    console.log('Yis');
  },
  startReviewFlow: function (): void {
    console.log('Yos');
  },
};

function getReviewInfo(_context: any) {
  let reviewManager = com.google.android.play.core.review.ReviewManagerFactory.create(_context);
  console.log(reviewManager);
  let manager = reviewManager.requestReviewFlow();
  console.log(manager);

  return reviewManager;
}

function startReviewFlow(reviewInfo?: any) {
  if (reviewInfo) {
  }
}

export class InAppReview extends InAppReviewCommon {
  public static ReviewManager: com.google.android.play.core.review.ReviewManager;
  public static ReviewManagerFactory: com.google.android.play.core.review.ReviewManagerFactory;
  public static ReviewInfo: com.google.android.play.core.review.ReviewInfo;

  public static reviewManager: com.google.android.play.core.review.ReviewManager;
  public static request: Promise<com.google.android.play.core.review.ReviewInfo>;

  static init() {
    console.log('>> Init Android');
    console.log(Utils.android.getApplicationContext());
    this.getReviewInfo();
  }

  static getReviewInfo() {
    const review = org.mastergui.reviews.InAppReview;
    const androidContext = Utils.android.getApplicationContext();
    const androidActivity = Application.android.foregroundActivity;
    console.log(androidContext);
    console.log(androidActivity);
    review.getReviewInfo(androidContext, androidActivity);
  }

  static startReviewFlow() {
    const review = org.mastergui.reviews.InAppReview;
    const androidContext = Utils.android.getApplicationContext();
    const androidActivity = Application.android.foregroundActivity;
    console.log(androidContext);
    console.log(androidActivity);
    review.startReviewFlow(androidContext, androidActivity);
  }

  static getKotlinReviewInfo() {
    const review = org.mastergui.reviews.InAppReview;
    const androidContext = Utils.android.getApplicationContext();
    const androidActivity = Application.android.foregroundActivity;
    console.log(androidContext);
    console.log(androidActivity);
    review.showReviewDialog(androidContext, androidActivity);
  }

  createNativeView() {
    return new com.mastergui.reviews.InAppReviewManager(Utils.android.getApplicationContext());
  }
}
