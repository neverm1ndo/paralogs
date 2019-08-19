import { Component, OnInit, Input } from '@angular/core';
import { Processes, Line } from '../mocks/processes.mock';
import { OptionsService } from '../options.service';
import { LogService } from '../log.service';

@Component({
  selector: 'app-logline',
  templateUrl: './logline.component.html',
  styleUrls: ['./logline.component.less']
})
export class LoglineComponent implements OnInit {

@Input('line') line : Line;
@Input('hour') hour : number;
inject : boolean = true;
processes = Processes;

  constructor(
    public opts: OptionsService,
    public log:LogService
  ) {}
//// FIXME: Нужен рефакторинг distributeProcesses(line: Line)
  distributeProcesses(line: Line) {
    switch (line.process) {
      case Processes.connection.connect:
        this.line.player.geo = this.log.parseGeoSeries(line.player.motion);
        this.opts.options.subscribe(opt => this.inject = !opt.connection);
        break;
      case Processes.connection.disconnect.quit:
        this.line.player.geo = this.log.parseGeoSeries(line.player.motion);
        this.opts.options.subscribe(opt => this.inject = !opt.connection);
        break;
      case Processes.connection.disconnect.ban:
        this.line.player.geo = this.log.parseGeoSeries(line.player.motion);
        this.line.player.motion = this.parseBan(line.player.motion);
        break;
      case Processes.connection.disconnect.rconkickban:
        this.line.player.geo = this.log.parseGeoSeries(line.player.motion);
        break;
      case Processes.connection.disconnect.kick:
        this.line.player.geo = this.log.parseGeoSeries(line.player.motion);
        this.line.player.motion = this.parseBan(line.player.motion);
        break;
      case Processes.connection.disconnect.time_out:
        this.line.player.geo = this.log.parseGeoSeries(line.player.motion);
        this.opts.options.subscribe(opt => this.inject = !opt.connection);
        break;
      case Processes.auth.ok:
        break;
      case Processes.auth.first_spawn.deny:
        break;
      case Processes.auth.first_spawn.allow:
        break;
      case Processes.mute.on.hand:
        this.parseHex(line.player.motion);
        break;
      case Processes.ban.unbanip.hand:
        break;
      case Processes.check.explode.vehicle:
        break;
      case Processes.check.explode.player:
        break;
      case Processes.check.silent.vehicle:
        this.parseHex(line.player.motion);
        break;
      case Processes.check.silent.player:
        this.parseHex(line.player.motion);
        break;
      case Processes.spectate.start:
        break;
      case Processes.spectate.change:
        break;
      case Processes.spectate.stop:
        break;
      case Processes.spectate.spawn:
        break;
      case Processes.player_info.on.id:
        break;
      case Processes.free_for_all.spawn:
      line.player.motion = 'spawned';
      this.opts.options.subscribe(opt => this.inject = !opt.spawn);
        break;
      case Processes.cmd.pre_process: // препроцессы
      this.opts.options.subscribe(opt => this.inject = !opt.preprocs);
      this.parseCmd(line.player.motion);
        break;
      case Processes.cmd.ok:
          this.parseCmd(line.player.motion);
          if (line.player.motion[1]=='group_chat' || line.player.motion[1]=='close_chat' || line.player.motion[1]=='pm' || line.player.motion[1]=='admin_chat') {
            this.inject=false;
          };
          this.opts.options.subscribe(opt => this.inject = !opt.cmd);
        break;
      case Processes.cmd.error.syntax:
          this.parseCmd(line.player.motion);
        break;
      case Processes.cmd.error.process:
          this.parseCmd(line.player.motion);
        break;
      case Processes.weapons.buy:
      this.opts.options.subscribe(opt => this.inject = !opt.weapBuy);
        break;
      case Processes.acheat.block.weapon.id:
        this.parseHex(line.player.motion);
        break;
      case Processes.acheat.block.money.max:
        this.parseHex(line.player.motion);
        break;
      case Processes.sleep.leave.exit:
        break;
      case Processes.sleep.leave.game:
        break;
      case Processes.money.send:
        break;
      case Processes.animation.standart:
        break;
      case Processes.health.killed:
      this.opts.options.subscribe(opt => this.inject = !opt.killDeath);
        break;
      case Processes.health.suicided:
      this.opts.options.subscribe(opt => this.inject = !opt.killDeath);
        break;
      case Processes.player_color.init:
          this.parseHex(line.player.motion);
          this.opts.options.subscribe(opt => this.inject = !opt.colChange);
        break;
      case Processes.player_color.set:
          this.parseHex(line.player.motion);
          this.opts.options.subscribe(opt => this.inject = !opt.colChange);
        break;
      case Processes.chat.msg:
        break;
      case Processes.chat.group:
        this.parseMsg(line.player.motion);
        break;
      case Processes.chat.pm:
        this.parsePmMsg(line.player.motion);
        break;
      case Processes.chat.admin_chat:
        this.parsePmMsg(line.player.motion);
        break;
      case Processes.chat.close:
        this.parsePmMsg(line.player.motion);
        break;
      case Processes.chat.report:
        this.parsePmMsg(line.player.motion);
        break;
      case Processes.chat.block.broadcast.advertising:
        this.parsePmMsg(line.player.motion);
        break;
      case Processes.automute.dictionary.mute:
        this.parsePmMsg(line.player.motion);
        break;
      case Processes.automute.dictionary.no_mute:
        this.parsePmMsg(line.player.motion);
        break;
      case Processes.automute.meaningless.mute:
        this.parsePmMsg(line.player.motion);
        break;
      case Processes.automute.meaningless.no_mute:
        this.parsePmMsg(line.player.motion);
        break;
      default:
        this.inject = false; // ВСЕ НЕ ВОШЕДШИЕ ПРОЦЕССЫ БУДУТ СКРЫТЫ
    }
  }

  //**НЕНУЖНЫЕ ФУНКЦИИ УДАЛИТЬ**\\

  checkOption() {
    let opt = JSON.parse(window.localStorage.getItem('filter'));
    return !opt.weapBuy;
  }

  parseHex(motion: any) {
    if (typeof motion == 'string')
      this.line.player.motion = motion.split(/\s/);
  }

  parsePmMsg(motion: any) {
    if (typeof motion == 'string')
      this.line.player.motion = motion.toString().split(/'(.*?)'/);
  }
  parseMsg(motion: any) {
    if (typeof motion == 'string')
      this.line.player.motion = motion.toString().match(/'(\\.|[^'\\])*'/g);
  }
  parseCmd(motion: any) {
    if (typeof motion == 'string') {
      this.line.player.motion = motion.toString().split(/\s/, 3);
      this.line.player.motion.push(motion.toString().match(/'(.*?)'/)[1]);
    } else return motion;
  }
  parseBan(motion: any) {
    if (typeof motion == 'string') {
      let newmotion = motion.toString().split(/\s/, 5);
      let reason = motion.toString().match(/'(.*?)'/);
      if (reason!==null) {
        newmotion.push(reason[0]);
        return newmotion.slice(3,6);
      } else {
        return null;
      }
    } else return motion;
  }

  ngOnInit() {
    this.distributeProcesses(Object.assign(this.line)); //ОЧЕНЬ БОЛЬШАЯ ФУНКЦИЯ, НУЖЕН РЕФАКТОРИНГ
  }
}
