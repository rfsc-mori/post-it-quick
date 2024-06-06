import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import authenticationConfig from 'config/authentication.config';
import { PASSWORD_HARD_LIMITS } from 'modules/api/user-credentials/constants/passwordHardLimits.constant';

@Injectable()
export class PasswordValidator {
  constructor(
    @Inject(authenticationConfig.KEY)
    private readonly config: ConfigType<typeof authenticationConfig>,
  ) {}

  async isValid(password: string): Promise<boolean> {
    // Regra 1: Senha não deve ser vazia ou undefined/null.
    if (!password) {
      return false;
    }

    // Regra 2: Senha deve ter no mínimo 12 caracteres.
    if (password.length < this.config.password.min_length) {
      return false;
    }

    // Regra 3: Senha deve ter no máximo 71 caracteres.
    if (password.length > this.config.password.max_length) {
      return false;
    }

    // Regra 4: Senha deve conter no máximo 71 bytes, isto inclui caracteres
    //          em UTF-8 que ocupam mais de 1 byte.
    if (Buffer.byteLength(password, 'utf8') > PASSWORD_HARD_LIMITS.MAX_LENGTH) {
      return false;
    }

    // Regra 5: A senha deve conter pelo menos uma letra minúscula,
    //          uma letra maiúscula, um número, um caractere especial e
    //          ter entre 12 e 71 caracteres.
    if (!password.match(this.config.password.format)) {
      return false;
    }

    return true;
  }
}
