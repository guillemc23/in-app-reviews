/// <reference path="in-app-review-declarations.d.ts"/>

declare module com {
  export module mastergui {
    export module reviews {
      export class InAppReviewManager {
        public static class: java.lang.Class<com.mastergui.reviews.InAppReviewManager>;
        public setRemindInterval(param0: number): com.mastergui.reviews.InAppReviewManager;
        public showRateDialog(param0: globalAndroid.app.Activity): void;
        public static with(param0: globalAndroid.content.Context): com.mastergui.reviews.InAppReviewManager;
        public setInstallDays(param0: number): com.mastergui.reviews.InAppReviewManager;
        public startReview(param0: globalAndroid.app.Activity, param1: com.google.android.play.core.review.ReviewManager, param2: com.google.android.play.core.review.ReviewInfo): void;
        public monitor(): void;
        public isDebug(): boolean;
        public setLaunchTimes(param0: number): com.mastergui.reviews.InAppReviewManager;
        public setDebug(param0: boolean): com.mastergui.reviews.InAppReviewManager;
        public static showRateDialogIfMeetsConditions(param0: globalAndroid.app.Activity): boolean;
        public shouldShowRateDialog(): boolean;
        public showDialog(param0: globalAndroid.app.Activity): void;
      }
    }
  }
}

declare module com {
  export module mastergui {
    export module reviews {
      export class InAppReviewPreferenceHelper {
        public static class: java.lang.Class<com.mastergui.reviews.InAppReviewPreferenceHelper>;
      }
    }
  }
}

declare module org {
  export module mastergui {
    export module reviews {
      export class InAppReview {
        public static class: java.lang.Class<org.mastergui.reviews.InAppReview>;
        public static startReviewFlow(param0: globalAndroid.content.Context, param1: globalAndroid.app.Activity): void;
        public static showReviewDialog(param0: globalAndroid.content.Context, param1: globalAndroid.app.Activity): void;
        public static getReviewInfo(param0: globalAndroid.content.Context, param1: globalAndroid.app.Activity): void;
        public constructor();
      }
      export module InAppReview {
        export class Companion {
          public static class: java.lang.Class<org.mastergui.reviews.InAppReview.Companion>;
          public getReviewInfo(): com.google.android.play.core.review.ReviewInfo;
          public startReviewFlow(param0: globalAndroid.content.Context, param1: globalAndroid.app.Activity): void;
          public showReviewDialog(param0: globalAndroid.content.Context, param1: globalAndroid.app.Activity): void;
          public getReviewManager(): com.google.android.play.core.review.ReviewManager;
          public setReviewManager(param0: com.google.android.play.core.review.ReviewManager): void;
          public setReviewInfo(param0: com.google.android.play.core.review.ReviewInfo): void;
          public getReviewInfo(param0: globalAndroid.content.Context, param1: globalAndroid.app.Activity): void;
        }
      }
    }
  }
}

//Generics information:
