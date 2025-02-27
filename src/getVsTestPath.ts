import * as core from '@actions/core';
import * as path from 'path';

export function getVsTestPath(): string {
  let vstestLocationMethod = core.getInput('vstestLocationMethod')
  if(vstestLocationMethod && vstestLocationMethod.toUpperCase() === "LOCATION") {
    return core.getInput('vstestLocation')
  }

  let vsTestVersion = core.getInput('vsTestVersion')

  // Visual Studio 2015
  if(vsTestVersion && vsTestVersion === "14.0") {
    return path.join(__dirname, 'win-x64/VsTest/v140/vstest.console.exe')
  }

  // Visual Studio 2017
  if(vsTestVersion && vsTestVersion === "15.0") {
    return path.join(__dirname, 'win-x64/VsTest/v150/Common7/IDE/Extensions/TestPlatform/vstest.console.exe')
  }

  // Visual Studio 2019
  if(vsTestVersion && vsTestVersion === "16.0") {
    return path.join(__dirname, 'win-x64/VsTest/v160/Common7/IDE/Extensions/TestPlatform/vstest.console.exe')
  }

  // Visual Studio 2022
  if(vsTestVersion && vsTestVersion === "17.0") {
    return path.join(__dirname, 'win-x64/VsTest/v170/Common7/IDE/Extensions/TestPlatform/vstest.console.exe')
  }

  // retain default behavior until expected to default to VS 2022
  return path.join(__dirname, 'win-x64/VsTest/v160/Common7/IDE/Extensions/TestPlatform/vstest.console.exe')
}
