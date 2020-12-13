import { LanguageDto } from '@/modules/lang/lang.dto';
import { LANGUAGES } from '@/modules/lang/lang.enum';

export const languages: LanguageDto[] = [
  {
    key: LANGUAGES.EN,
    label: 'English',
    shortLabel: 'EN',
  },
  {
    key: LANGUAGES.VI,
    label: 'Tiếng Việt',
    shortLabel: 'VN',
  },
];
