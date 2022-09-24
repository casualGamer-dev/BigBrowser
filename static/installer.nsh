!macro customInstall
  WriteRegStr SHCTX "SOFTWARE\RegisteredApplications" "nuon" "Software\Clients\StartMenuInternet\nuon\Capabilities"

  WriteRegStr SHCTX "SOFTWARE\Classes\nuon" "" "nuon HTML Document"
  WriteRegStr SHCTX "SOFTWARE\Classes\nuon\Application" "AppUserModelId" "nuon"
  WriteRegStr SHCTX "SOFTWARE\Classes\nuon\Application" "ApplicationIcon" "$INSTDIR\nuon.exe,0"
  WriteRegStr SHCTX "SOFTWARE\Classes\nuon\Application" "ApplicationName" "nuon"
  WriteRegStr SHCTX "SOFTWARE\Classes\nuon\Application" "ApplicationCompany" "nuon"      
  WriteRegStr SHCTX "SOFTWARE\Classes\nuon\Application" "ApplicationDescription" "A privacy-focused, extensible and beautiful web browser"      
  WriteRegStr SHCTX "SOFTWARE\Classes\nuon\DefaultIcon" "DefaultIcon" "$INSTDIR\nuon.exe,0"
  WriteRegStr SHCTX "SOFTWARE\Classes\nuon\shell\open\command" "" '"$INSTDIR\nuon.exe" "%1"'

  WriteRegStr SHCTX "SOFTWARE\Classes\.htm\OpenWithProgIds" "nuon" ""
  WriteRegStr SHCTX "SOFTWARE\Classes\.html\OpenWithProgIds" "nuon" ""

  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\nuon" "" "nuon"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\nuon\DefaultIcon" "" "$INSTDIR\nuon.exe,0"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\nuon\Capabilities" "ApplicationDescription" "A privacy-focused, extensible and beautiful web browser"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\nuon\Capabilities" "ApplicationName" "nuon"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\nuon\Capabilities" "ApplicationIcon" "$INSTDIR\nuon.exe,0"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\nuon\Capabilities\FileAssociations" ".htm" "nuon"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\nuon\Capabilities\FileAssociations" ".html" "nuon"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\nuon\Capabilities\URLAssociations" "http" "nuon"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\nuon\Capabilities\URLAssociations" "https" "nuon"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\nuon\Capabilities\StartMenu" "StartMenuInternet" "nuon"
  
  WriteRegDWORD SHCTX "SOFTWARE\Clients\StartMenuInternet\nuon\InstallInfo" "IconsVisible" 1
  
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\nuon\shell\open\command" "" "$INSTDIR\nuon.exe"
!macroend
!macro customUnInstall
  DeleteRegKey SHCTX "SOFTWARE\Classes\nuon"
  DeleteRegKey SHCTX "SOFTWARE\Clients\StartMenuInternet\nuon"
  DeleteRegValue SHCTX "SOFTWARE\RegisteredApplications" "nuon"
!macroend