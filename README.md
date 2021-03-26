# Challenge RN - Idukay
Author: Jeremy Bravo

App created with React Native
https://reactnative.dev/docs/0.63/getting-started
## Android Programs Required
* Android Studio: https://developer.android.com/studio
* ADB: https://developer.android.com/studio/command-line/adb
## Mac Programs Required
* Xcode: https://developer.apple.com/xcode/ (For building and simulator)
* CocoaPods: https://cocoapods.org/ (RubyGem for Xcode dependencies)
## First Run
For running this app, make sure to specify the path to your Android SDK, by any of the following options:
* Going to `android` directory and specifying the path to your Android SDK like this: `sdk.dir=/home/Android/Sdk`
* Open the `android` directory with Android Studio. This will automatically configure the `local.properties` file
## Installing dependencies
```
npm install
```
## Running the app Android 
Connect your Android device
 Your device must have enabled Developer Options and once
 connected through USB, make sure 'File Transfer' is enabled.
##### Run with command line
```
npm run android
```
### Running test Jest
```
npm run test
```
### Build app on Mac
#### In Mac, open the folder IOS of the proyect with Xcode and build it. If you are using a device instead of the simulator you will need to connect the apple developer account to your Xcode.
### Run on the IOS folder:
```
pod install
```
### Next, you can running the app from console:
```
npm run ios
```