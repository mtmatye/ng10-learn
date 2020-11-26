import {
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Injector,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { AlertComponent } from '../components/alert/alert.component';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class ExampleComponent implements OnInit {
  hide = false;
  show = true;
  list = [];

  private container: AlertComponent;
  private componentRef: ComponentRef<AlertComponent>;
  constructor(
    private cfr: ComponentFactoryResolver,
    private inject: Injector,
    private appRef: ApplicationRef
  ) {
    // this.setList();
  }

  ngOnInit(): void {}

  // setList(): void {
  //   this.list = [];
  //   const prefix = 'item' + Date.now().toString().slice(-3);
  //   for (let i = 0; i < 20; i++) {
  //     this.list.push({
  //       key: prefix + '_' + i,
  //       value: `${prefix}${i + 1}`,
  //       checked: false,
  //       direction: i % 6 === 0 ? 'right' : '',
  //     });
  //   }
  // }

  showAlert(): void {
    // if (!this.container) {
    this.container = this.getContainer();
    // }
    this.container.setOptions({ content: 'more an', theme: 'info' });
  }

  private getContainer(): AlertComponent {
    // 创建指定类型的组件工厂（生产指定类型的组件）
    const factory = this.cfr.resolveComponentFactory<AlertComponent>(
      AlertComponent
    );

    // 根据指定的类型，创建组件的示例
    this.componentRef = factory.create(this.inject);

    // 将组件试图添加到试图树中，以激活变更检测
    this.appRef.attachView(this.componentRef.hostView);

    // 将组件到模版(包括app-alert标签)，添加到body最后
    // document.body.appendChild(
    //   (this.componentRef.hostView as EmbeddedViewRef<{}>)
    //     .rootNodes[0] as HTMLElement
    // );
    document.body.appendChild(this.componentRef.location.nativeElement);

    // 监听组件销毁事件
    this.componentRef.onDestroy(() => {
      console.log('componentRef destory');
    });

    // 获取组件实例，相当于用@ViewChild获取子组件一样
    const { instance } = this.componentRef;

    // 监听组件到output事件
    instance.closed.subscribe(() => {
      this.componentRef.destroy();
      this.container = null;
    });

    return instance;
  }

  onConfirm(val): void {
    console.log('confirm', val);
  }
}
