import type { AddPrefixAndDefault, ForwardRef, GetFn } from './types';
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

export const Important = Symbol('Alam Important Style');

interface AlamInterface<AlamProps extends Record<string, unknown>> {
  View(props: AlamProps & ViewProps & ForwardRef<View>): React.ReactElement;
  TouchableHighlight(
    props: AlamProps & TouchableHighlightProps & ForwardRef<TouchableHighlight>
  ): React.ReactElement;
  KeyboardAvoidingView(
    props: AlamProps &
      KeyboardAvoidingViewProps &
      ForwardRef<KeyboardAvoidingView>
  ): React.ReactElement;
  Text(props: AlamProps & TextProps & ForwardRef<Text>): React.ReactElement;
  Image(props: AlamProps & ImageProps & ForwardRef<Image>): React.ReactElement;
  ImageBackground(
    props: AlamProps & ImageBackgroundProps & ForwardRef<ImageBackground>
  ): React.ReactElement;
  TextInput(
    props: AlamProps & TextInputProps & ForwardRef<TextInput>
  ): React.ReactElement;
  ScrollView(
    props: AlamProps & ScrollViewProps & ForwardRef<ScrollView>
  ): React.ReactElement;
  SafeAreaView(
    props: AlamProps & ViewProps & ForwardRef<SafeAreaView>
  ): React.ReactElement;
  Pressable(
    props: AlamProps & PressableProps & ForwardRef<View>
  ): React.ReactElement;
  TouchableOpacity(
    props: AlamProps & TouchableOpacityProps & ForwardRef<TouchableOpacity>
  ): React.ReactElement;
  TouchableWithoutFeedback(
    props: AlamProps &
      TouchableWithoutFeedbackProps &
      ForwardRef<TouchableWithoutFeedback>
  ): React.ReactElement;
  FlatList<T>(
    props: AlamProps & FlatListProps<T> & ForwardRef<FlatList>
  ): React.ReactElement;
  SectionList<ItemT, SectionT = DefaultSectionT>(
    props: AlamProps &
      SectionListProps<ItemT, SectionT> &
      ForwardRef<SectionList>
  ): React.ReactElement;

  convert<FunctionProps>(
    component: (props: FunctionProps) => any
  ): (props: AlamProps & FunctionProps) => any;

  /** add this as a property to a style object
   * to make them be applied _after_ the alam props
   * @deprecated Please use the alam-important property instead */
  Important: symbol;
}

export function createAlam<A extends Record<string, unknown>>(
  attr: GetFn<A>
): AlamInterface<AddPrefixAndDefault<A>> {
  const alam = converter(attr);
  const Alam: AlamInterface<AddPrefixAndDefault<A>> = function () {};

  Alam.View = alam<ViewProps & ForwardRef<View>, React.ReactElement>(
    ({ forwardRef, ...props }) => <View ref={forwardRef} {...props} />
  );
  Alam.TouchableHighlight = alam<
    TouchableHighlightProps & ForwardRef<TouchableHighlight>,
    React.ReactElement
  >(({ forwardRef, ...props }) => (
    <TouchableHighlight ref={forwardRef} {...props} />
  ));
  Alam.KeyboardAvoidingView = alam<
    KeyboardAvoidingViewProps & ForwardRef<KeyboardAvoidingView>,
    React.ReactElement
  >(({ forwardRef, ...props }) => (
    <KeyboardAvoidingView ref={forwardRef} {...props} />
  ));
  Alam.Text = alam<TextProps & ForwardRef<Text>, React.ReactElement>(
    ({ forwardRef, ...props }) => <Text ref={forwardRef} {...props} />
  );
  Alam.Image = alam<ImageProps & ForwardRef<Image>, React.ReactElement>(
    ({ forwardRef, ...props }) => <Image ref={forwardRef} {...props} />
  );
  Alam.ImageBackground = alam<
    ImageBackgroundProps & ForwardRef<ImageBackground>,
    React.ReactElement
  >(({ forwardRef, ...props }) => (
    <ImageBackground ref={forwardRef} {...props} />
  ));
  Alam.TextInput = alam<
    TextInputProps & ForwardRef<TextInput>,
    React.ReactElement
  >(({ forwardRef, ...props }) => <TextInput ref={forwardRef} {...props} />);
  Alam.ScrollView = alam<
    ScrollViewProps & ForwardRef<ScrollView>,
    React.ReactElement
  >(({ forwardRef, ...props }) => <ScrollView ref={forwardRef} {...props} />);
  Alam.SafeAreaView = alam<
    ViewProps & ForwardRef<SafeAreaView>,
    React.ReactElement
  >(({ forwardRef, ...props }) => <SafeAreaView ref={forwardRef} {...props} />);
  Alam.Pressable = alam<PressableProps & ForwardRef<View>, React.ReactElement>(
    ({ forwardRef, ...props }) => <Pressable ref={forwardRef} {...props} />
  );
  Alam.TouchableOpacity = alam<
    TouchableOpacityProps & ForwardRef<TouchableOpacity>,
    React.ReactElement
  >(({ forwardRef, ...props }) => (
    <TouchableOpacity ref={forwardRef} {...props} />
  ));
  Alam.TouchableWithoutFeedback = alam<
    TouchableWithoutFeedbackProps & ForwardRef<TouchableWithoutFeedback>,
    React.ReactElement
  >(({ forwardRef, ...props }) => (
    <TouchableWithoutFeedback ref={forwardRef} {...props} />
  ));

  const flatListWrap = alam<
    FlatListProps<any> & ForwardRef<FlatList>,
    React.ReactElement
  >(({ forwardRef, ...props }) => <FlatList ref={forwardRef} {...props} />);
  Alam.FlatList = <T extends any>(
    props: AddPrefixAndDefault<A> & FlatListProps<T> & ForwardRef<FlatList>
  ) => flatListWrap(props);

  const sectionListWrap = alam<
    SectionListProps<any, any> & ForwardRef<SectionList>,
    React.ReactElement
  >(({ forwardRef, ...props }) => <SectionList ref={forwardRef} {...props} />);
  Alam.SectionList = <ItemT, SectionT = DefaultSectionT>(
    props: AddPrefixAndDefault<A> &
      SectionListProps<ItemT, SectionT> &
      ForwardRef<SectionList>
  ) => sectionListWrap(props);

  Alam.convert = alam;
  Alam.Important = Important;

  return Alam;
}
