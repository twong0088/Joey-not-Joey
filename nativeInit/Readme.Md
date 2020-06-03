# Create React Native App Install
For updated information go to https://reactnative.dev/docs/environment-setup
## 1. Install Dependencies
  ### Install Node
  Either brew install node or go to https://nodejs.org/en/
  ### Install Watchman
  brew install watchman
  ### Install X-Code - IPHONE
  https://apps.apple.com/us/app/xcode/id497799835?mt=12
  ### Install Cocoa Pods - IPHONE
  sudo gem install cocoapods
  ### Install JDK - ANDROID
  brew cask install adoptopenjdk/openjdk/adoptopenjdk8
  ### Install Android Studio
  https://developer.android.com/studio
  #### Make sure to install version 9.0 (Pie)
    See React Native docs for details
  #### Update bash profile with the following
    export ANDROID_HOME=$HOME/Library/Android/sdk
    export PATH=$PATH:$ANDROID_HOME/emulator
    export PATH=$PATH:$ANDROID_HOME/tools
    export PATH=$PATH:$ANDROID_HOME/tools/bin
    export PATH=$PATH:$ANDROID_HOME/platform-tools

## 2. Running 

  ### npm start is mapped to the bundler, that generates your code (like webpack)

  ### npm run ios / npm run android uses that bundled code on the appropriate virtual phone