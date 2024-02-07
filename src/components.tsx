import type { Finish, GetFn } from './types';
import {
  type DefaultSectionT,
  SafeAreaView,
  View,
  type ViewProps,
  Text,
  type TextProps,
  Image,
  type ImageProps,
  TextInput,
  type TextInputProps,
  ScrollView,
  type ScrollViewProps,
  FlatList,
  type FlatListProps,
  SectionList,
  type SectionListProps,
  ImageBackground,
  type ImageBackgroundProps,
  KeyboardAvoidingView,
  type KeyboardAvoidingViewProps,
  Pressable,
  type PressableProps,
  TouchableHighlight,
  type TouchableHighlightProps,
  TouchableOpacity,
  type TouchableOpacityProps,
  TouchableWithoutFeedback,
  type TouchableWithoutFeedbackProps,
} from 'react-native';
import React from 'react';
import { converter } from './converter';

interface AlamInterface<AlamProps extends Record<string, unknown>> {
  View(props: AlamProps & ViewProps): React.ReactElement;
  TouchableHighlight(
    props: AlamProps & TouchableHighlightProps
  ): React.ReactElement;
  KeyboardAvoidingView(
    props: AlamProps & KeyboardAvoidingViewProps
  ): React.ReactElement;
  Text(props: AlamProps & TextProps): React.ReactElement;
  Image(props: AlamProps & ImageProps): React.ReactElement;
  ImageBackground(props: AlamProps & ImageBackgroundProps): React.ReactElement;
  TextInput(props: AlamProps & TextInputProps): React.ReactElement;
  ScrollView(props: AlamProps & ScrollViewProps): React.ReactElement;
  SafeAreaView(props: AlamProps & ViewProps): React.ReactElement;
  Pressable(props: AlamProps & PressableProps): React.ReactElement;
  TouchableOpacity(
    props: AlamProps & TouchableOpacityProps
  ): React.ReactElement;
  TouchableWithoutFeedback(
    props: AlamProps & TouchableWithoutFeedbackProps
  ): React.ReactElement;
  FlatList<T>(props: AlamProps & FlatListProps<T>): React.ReactElement;
  SectionList<ItemT, SectionT = DefaultSectionT>(
    props: AlamProps & SectionListProps<ItemT, SectionT>
  ): React.ReactElement;

  convert<FunctionProps>(
    component: (props: FunctionProps) => any
  ): (props: AlamProps & FunctionProps) => any;
}

export function createAlam<A extends Record<string, unknown>>(
  attr: GetFn<A>
): AlamInterface<Finish<A>> {
  const alam = converter(attr);
  const Alam: AlamInterface<Finish<A>> = function () {};

  Alam.View = alam<ViewProps, React.ReactElement>((props) => (
    <View {...props} />
  ));
  Alam.TouchableHighlight = alam<TouchableHighlightProps, React.ReactElement>(
    (props) => <TouchableHighlight {...props} />
  );
  Alam.KeyboardAvoidingView = alam<
    KeyboardAvoidingViewProps,
    React.ReactElement
  >((props) => <KeyboardAvoidingView {...props} />);
  Alam.Text = alam<TextProps, React.ReactElement>((props) => (
    <Text {...props} />
  ));
  Alam.Image = alam<ImageProps, React.ReactElement>((props) => (
    <Image {...props} />
  ));
  Alam.ImageBackground = alam<ImageBackgroundProps, React.ReactElement>(
    (props) => <ImageBackground {...props} />
  );
  Alam.TextInput = alam<TextInputProps, React.ReactElement>((props) => (
    <TextInput {...props} />
  ));
  Alam.ScrollView = alam<ScrollViewProps, React.ReactElement>((props) => (
    <ScrollView {...props} />
  ));
  Alam.SafeAreaView = alam<ViewProps, React.ReactElement>((props) => (
    <SafeAreaView {...props} />
  ));
  Alam.Pressable = alam<PressableProps, React.ReactElement>((props) => (
    <Pressable {...props} />
  ));
  Alam.TouchableOpacity = alam<TouchableOpacityProps, React.ReactElement>(
    (props) => <TouchableOpacity {...props} />
  );
  Alam.TouchableWithoutFeedback = alam<
    TouchableWithoutFeedbackProps,
    React.ReactElement
  >((props) => <TouchableWithoutFeedback {...props} />);

  const flatListWrap = alam<FlatListProps<any>, React.ReactElement>((props) => (
    <FlatList {...props} />
  ));
  Alam.FlatList = <T extends any>(props: Finish<A> & FlatListProps<T>) =>
    flatListWrap(props);

  const sectionListWrap = alam<SectionListProps<any, any>, React.ReactElement>(
    (props) => <SectionList {...props} />
  );
  Alam.SectionList = <ItemT, SectionT = DefaultSectionT>(
    props: Finish<A> & SectionListProps<ItemT, SectionT>
  ) => sectionListWrap(props);

  Alam.convert = alam;

  return Alam;
}
