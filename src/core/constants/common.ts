import { Languages } from 'core/enums/common';
import { ILanguages, ISelect } from 'core/types/common';

export const genderOptions: ISelect<string>[] = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Others', value: 'others' },
];

export const languages: ILanguages[] = [
  { label: 'Canada', flag: 'ca', value: Languages.CANADA },
  { label: 'Việt Nam', flag: 'vi', value: Languages.VIET_NAM },
];
