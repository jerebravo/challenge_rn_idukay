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
npm run start
```
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

# Preview of challenge IOS
<p align="center">
  <img src="https://user-images.githubusercontent.com/56641949/112576221-a66ff080-8dd0-11eb-8841-a492b2a89537.png" width="350">
  
  <img src="https://user-images.githubusercontent.com/56641949/112627633-a099ff80-8e10-11eb-8785-998e4fb98450.png" width="350">
</p>

# Preview of challenge Android
<p align="center">
  <img src="https://user-images.githubusercontent.com/56641949/112627845-e48d0480-8e10-11eb-85a5-5ed20c70076a.png" width="350">
  
  <img src="https://user-images.githubusercontent.com/56641949/112627908-fa9ac500-8e10-11eb-9a4c-f6b4e48b707b.png" width="350">
</p>
