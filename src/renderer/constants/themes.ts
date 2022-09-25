import { ITheme } from '~/interfaces';
import { BLUE_500 } from './colors';



export const lightTheme: ITheme = {
  'titlebar.backgroundColor': '#d4d4d4',
  'addressbar.backgroundColor': '#fff',
  'addressbar.textColor': '#000',
  'toolbar.backgroundColor': '#f8f8f8',
  'toolbar.bottomLine.backgroundColor': 'rgba(0, 0, 0, 0.12)',
  'toolbar.lightForeground': false,
  'toolbar.separator.color': 'rgba(0, 0, 0, 0.12)',
  'tab.selected.textColor': '#000',
  'tab.textColor': `rgba(0, 0, 0, 0.7)`,
  'control.backgroundColor': 'rgba(0, 0, 0, 0.08)',
  'control.hover.backgroundColor': 'rgba(0, 0, 0, 0.1)',
  'control.valueColor': '#000',
  'control.lightIcon': false,
  'switch.backgroundColor': 'rgba(0, 0, 0, 0.16)',
  'dialog.backgroundColor': '#fff',
  'dialog.separator.color': 'rgba(0, 0, 0, 0.12)',
  'dialog.textColor': '#000',
  'dialog.lightForeground': false,
  'searchBox.backgroundColor': '#fff',
  'searchBox.lightForeground': false,
  'pages.backgroundColor': '#fff',
  'pages.lightForeground': false,
  'pages.textColor': '#000',
  'dropdown.backgroundColor': '#fff',
  'dropdown.backgroundColor.translucent': 'rgba(255, 255, 255, 0.7)',
  'dropdown.separator.color': 'rgba(0, 0, 0, 0.12)',
  'pages.navigationDrawer1.backgroundColor': '#f5f5f5',
  'pages.navigationDrawer2.backgroundColor': '#fafafa',

  accentColor: BLUE_500,
  backgroundColor: '#fff',
};



export const darkTheme: ITheme = {
  'titlebar.backgroundColor': '#1c1c1c',
  'addressbar.backgroundColor': '#262626',
  'addressbar.textColor': '#fff',
  'toolbar.backgroundColor': '#333333',
  'toolbar.bottomLine.backgroundColor': 'rgba(255, 255, 255, 0.08)',
  'toolbar.lightForeground': true,
  'toolbar.separator.color': 'rgba(255, 255, 255, 0.12)',
  'tab.selected.textColor': '#fff',
  'tab.textColor': 'rgba(255, 255, 255, 0.54)',
  'control.backgroundColor': 'rgba(255, 255, 255, 0.1)',
  'control.hover.backgroundColor': 'rgba(255, 255, 255, 0.12)',
  'control.valueColor': '#fff',
  'control.lightIcon': true,
  'switch.backgroundColor': 'rgba(255, 255, 255, 0.24)',
  'dialog.backgroundColor': '#383838',
  'dialog.separator.color': 'rgba(255, 255, 255, 0.12)',
  'dialog.textColor': '#fff',
  'dialog.lightForeground': true,
  'searchBox.backgroundColor': '#262626',
  'searchBox.lightForeground': true,
  'pages.backgroundColor': '#212121',
  'pages.lightForeground': true,
  'pages.textColor': '#fff',
  'dropdown.backgroundColor': 'rgb(66, 66, 66)',
  'dropdown.backgroundColor.translucent': 'rgb(60, 60, 60, 0.6)',
  'dropdown.separator.color': 'rgba(255, 255, 255, 0.12)',
  'pages.navigationDrawer1.backgroundColor': 'rgba(255, 255, 255, 0.1)',
  'pages.navigationDrawer2.backgroundColor': 'rgba(255, 255, 255, 0.05)',

  backgroundColor: '#1c1c1c',
  accentColor: BLUE_500,
};
